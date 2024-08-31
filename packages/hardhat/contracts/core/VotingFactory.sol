// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {ERC165Checker} from "@openzeppelin/contracts/utils/introspection/ERC165Checker.sol";

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {IVotingPool} from "../interfaces/core/IVotingPool.sol";
import {IVotingFactory} from "../interfaces/core/IVotingFactory.sol";
import {IVotingRegistry} from "../interfaces/core/IVotingRegistry.sol";

/**
 * @title VotingFactory contract
 * @dev Contract for managing the creation and registration of voting pools with support for ERC165 interface checks.
 */
contract VotingFactory is IVotingFactory, Initializable, UUPSUpgradeable {
    IVotingRegistry public votingRegistry;

    error PoolTypeDoesNotExist();
    error PoolInitializationFailed();
    error VotingPoolDoesNotSupportIVotingPool();
    error OnlyRegistryOwnerCanUpgrade();

    modifier onlyExistingPoolType(string memory votingType_) {
        _requireExistingPoolType(votingType_);
        _;
    }

    constructor() {
        _disableInitializers();
    }

    /**
     * @notice The function to initialize the VotingFactory.
     * @param votingRegistry_ The address of the PoolRegistry contract.
     *
     * It binds the PoolRegistry contract to the VotingFactory.
     */
    function __VotingFactory_init(address votingRegistry_) external initializer {
        votingRegistry = IVotingRegistry(votingRegistry_);
    }

    /**
     * @inheritdoc IVotingFactory
     */
    function createRegistration(string memory registrationType_, bytes memory data_) external {
        _createPool(registrationType_, data_);
    }

    /**
     * @inheritdoc IVotingFactory
     */
    function createRegistrationWithSalt(
        string memory registrationType_,
        bytes memory data_,
        bytes32 salt_
    ) external {
        _createPoolWithSalt(registrationType_, data_, salt_);
    }

    /**
     * @inheritdoc IVotingFactory
     */
    function createVoting(string memory votingType_, bytes memory data_) external {
        address voting_ = _createPool(votingType_, data_);

        if (!ERC165Checker.supportsInterface(voting_, type(IVotingPool).interfaceId)) {
            revert VotingPoolDoesNotSupportIVotingPool();
        }

        address[] memory registrations_ = IVotingPool(voting_).getRegistrationAddresses();

        for (uint256 i = 0; i < registrations_.length; i++) {
            votingRegistry.bindVotingToRegistration(msg.sender, voting_, registrations_[i]);
        }
    }

    /**
     * @inheritdoc IVotingFactory
     */
    function createVotingWithSalt(
        string memory votingType_,
        bytes memory data_,
        bytes32 salt_
    ) external {
        address voting_ = _createPoolWithSalt(votingType_, data_, salt_);

        if (!ERC165Checker.supportsInterface(voting_, type(IVotingPool).interfaceId)) {
            revert VotingPoolDoesNotSupportIVotingPool();
        }

        address[] memory registrations_ = IVotingPool(voting_).getRegistrationAddresses();

        for (uint256 i = 0; i < registrations_.length; i++) {
            votingRegistry.bindVotingToRegistration(msg.sender, voting_, registrations_[i]);
        }
    }

    /**
     * @inheritdoc IVotingFactory
     */
    function predictAddress(
        string memory poolType_,
        address proposer_,
        bytes32 salt_
    ) external view returns (address) {
        bytes32 combinedSalt_ = keccak256(abi.encodePacked(proposer_, salt_));

        return _predictPoolAddress(poolType_, new bytes(0), combinedSalt_);
    }

    function _createPool(
        string memory poolType_,
        bytes memory data_
    ) internal onlyExistingPoolType(poolType_) returns (address) {
        address pool_ = _deploy(poolType_, data_);

        _register(poolType_, msg.sender, pool_);

        emit InstanceCreated(poolType_, msg.sender, pool_);

        return pool_;
    }

    function _createPoolWithSalt(
        string memory poolType_,
        bytes memory data_,
        bytes32 salt_
    ) internal onlyExistingPoolType(poolType_) returns (address) {
        bytes32 combinedSalt_ = keccak256(abi.encodePacked(msg.sender, salt_));

        address pool_ = _deploy2(poolType_, new bytes(0), combinedSalt_);

        (bool success_, bytes memory returnData_) = pool_.call(data_);
        Address.verifyCallResult(success_, returnData_, PoolInitializationFailed());

        _register(poolType_, msg.sender, pool_);

        emit InstanceCreated(poolType_, msg.sender, pool_);

        return pool_;
    }

    function _deploy(string memory poolType_, bytes memory data_) private returns (address) {
        return address(new ERC1967Proxy(votingRegistry.getPoolImplementation(poolType_), data_));
    }

    function _deploy2(
        string memory poolType_,
        bytes memory data_,
        bytes32 salt_
    ) private returns (address) {
        return
            address(
                new ERC1967Proxy{salt: salt_}(
                    votingRegistry.getPoolImplementation(poolType_),
                    data_
                )
            );
    }

    function _register(string memory poolType_, address proposer_, address poolProxy_) private {
        votingRegistry.addProxyPool(poolType_, proposer_, poolProxy_);
    }

    function _predictPoolAddress(
        string memory poolType_,
        bytes memory data_,
        bytes32 salt_
    ) private view returns (address) {
        bytes32 bytecodeHash = keccak256(
            abi.encodePacked(
                type(ERC1967Proxy).creationCode,
                abi.encode(votingRegistry.getPoolImplementation(poolType_), data_)
            )
        );

        return Create2.computeAddress(salt_, bytecodeHash);
    }

    function _requireExistingPoolType(string memory poolType_) private view {
        if (votingRegistry.getPoolImplementation(poolType_) == address(0)) {
            revert PoolTypeDoesNotExist();
        }
    }

    function _authorizeUpgrade(address) internal view override {
        if (msg.sender != OwnableUpgradeable(address(votingRegistry)).owner()) {
            revert OnlyRegistryOwnerCanUpgrade();
        }
    }
}
