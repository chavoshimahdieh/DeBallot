// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {Paginator} from "@solarity/solidity-lib/libs/arrays/Paginator.sol";

import {IVotingRegistry} from "../interfaces/core/IVotingRegistry.sol";

/**
 * @title VotingRegistry contract
 * @dev Manages pool types, implementations, and associations between voting and registration pools.
 */
contract VotingRegistry is IVotingRegistry, Initializable, OwnableUpgradeable, UUPSUpgradeable {
    using EnumerableSet for EnumerableSet.AddressSet;
    using Paginator for EnumerableSet.AddressSet;

    address public poolFactory;

    // pool address => poolType
    mapping(address => string) private _typeByPool;

    // poolType => pool
    mapping(string => EnumerableSet.AddressSet) private _poolByType;

    // proposer => pool
    mapping(address => EnumerableSet.AddressSet) private _poolByAddress;

    // proposer => poolType => pool
    mapping(address => mapping(string => EnumerableSet.AddressSet)) private _poolByAddressAndType;

    // poolType => poolImplementation
    mapping(string => address) private _poolImplementations;

    // proposer => registration => voting
    mapping(address => mapping(address => address)) private _registrationToVoting;

    error LengthMismatch();
    error PoolTypeCannotBeEmpty();
    error AddressIsNotAContract();
    error RegistrationPoolNotFound();
    error VotingContractAlreadyBound();
    error OnlyFactoryCanCall();

    modifier onlyEqualLength(string[] memory poolType_, address[] memory newImplementations_) {
        if (poolType_.length != newImplementations_.length) {
            revert LengthMismatch();
        }
        _;
    }

    modifier onlyFactory() {
        if (msg.sender != poolFactory) {
            revert OnlyFactoryCanCall();
        }
        _;
    }

    constructor() {
        _disableInitializers();
    }

    /**
     * @notice The function to initialize the VotingRegistry.
     * @param poolFactory_ The address of the PoolFactory contract.
     *
     * It binds the PoolFactory contract to the VotingRegistry.
     */
    function __VotingRegistry_init(address poolFactory_) external initializer {
        __Ownable_init();

        poolFactory = poolFactory_;
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function setNewImplementations(
        string[] memory poolTypes_,
        address[] memory newImplementations_
    ) external onlyOwner onlyEqualLength(poolTypes_, newImplementations_) {
        for (uint256 i = 0; i < poolTypes_.length; i++) {
            if (bytes(poolTypes_[i]).length == 0) {
                revert PoolTypeCannotBeEmpty();
            }

            if (!Address.isContract(newImplementations_[i])) {
                revert AddressIsNotAContract();
            }

            _poolImplementations[poolTypes_[i]] = newImplementations_[i];
        }
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function addProxyPool(
        string memory poolType_,
        address proposer_,
        address pool_
    ) external onlyFactory {
        _poolByType[poolType_].add(pool_);
        _poolByAddress[proposer_].add(pool_);
        _poolByAddressAndType[proposer_][poolType_].add(pool_);

        _typeByPool[pool_] = poolType_;
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function bindVotingToRegistration(
        address proposer_,
        address voting_,
        address registration_
    ) external onlyFactory {
        if (bytes(_typeByPool[registration_]).length == 0) {
            revert RegistrationPoolNotFound();
        }

        if (_registrationToVoting[proposer_][registration_] != address(0)) {
            revert VotingContractAlreadyBound();
        }

        _registrationToVoting[proposer_][registration_] = voting_;
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function getPoolImplementation(string memory poolType_) external view returns (address) {
        return _poolImplementations[poolType_];
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function getVotingForRegistration(
        address proposer_,
        address registration_
    ) external view returns (address) {
        return _registrationToVoting[proposer_][registration_];
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function isPoolExistByType(
        string memory poolType_,
        address pool_
    ) external view returns (bool) {
        return _poolByType[poolType_].contains(pool_);
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function isPoolExistByProposer(address proposer_, address pool_) external view returns (bool) {
        return _poolByAddress[proposer_].contains(pool_);
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function isPoolExistByProposerAndType(
        address proposer_,
        string memory poolType_,
        address pool_
    ) external view returns (bool) {
        return _poolByAddressAndType[proposer_][poolType_].contains(pool_);
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function poolCountByType(string memory poolType_) external view returns (uint256) {
        return _poolByType[poolType_].length();
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function poolCountByProposer(address proposer_) external view returns (uint256) {
        return _poolByAddress[proposer_].length();
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function poolCountByProposerAndType(
        address proposer_,
        string memory poolType_
    ) external view returns (uint256) {
        return _poolByAddressAndType[proposer_][poolType_].length();
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function listPoolsByType(
        string memory poolType_,
        uint256 offset_,
        uint256 limit_
    ) external view returns (address[] memory pools_) {
        return _poolByType[poolType_].part(offset_, limit_);
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function listPoolsByProposer(
        address proposer_,
        uint256 offset_,
        uint256 limit_
    ) external view returns (address[] memory pools_) {
        return _poolByAddress[proposer_].part(offset_, limit_);
    }

    /**
     * @inheritdoc IVotingRegistry
     */
    function listPoolsByProposerAndType(
        address proposer_,
        string memory poolType_,
        uint256 offset_,
        uint256 limit_
    ) external view returns (address[] memory pools_) {
        return _poolByAddressAndType[proposer_][poolType_].part(offset_, limit_);
    }

    function _requireEqualLength(
        string[] memory names_,
        address[] memory newImplementations_
    ) private pure {
        require(
            names_.length == newImplementations_.length,
            "VotingRegistry: names and implementations length mismatch"
        );
    }

    function _requireOnlyFactory() private view {
        require(msg.sender == poolFactory, "VotingRegistry: only factory can call this function");
    }

    function _authorizeUpgrade(address) internal view override onlyOwner {}
}
