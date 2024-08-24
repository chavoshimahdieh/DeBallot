// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";
import "../../contracts/AccessRestriction.sol";
import "../../contracts/RentalDAO.sol";
import "../../contracts/RentalAgreement.sol";
import "../../contracts/Escrow.sol";
import "../../contracts/Inspection.sol";
import "../../contracts/DisputeResolution.sol";
import "../../contracts/SocialFi.sol";
import "../../contracts/Reputation.sol";
import "../../contracts/MockToken.sol";

contract RentalSystemTest is Test {
	AccessRestriction accessRestriction;
	RentalDAO rentalDAO;
	RentalAgreement rentalAgreement;
	Escrow escrow;
	Inspection inspection;
	DisputeResolution disputeResolution;
	SocialFi socialFi;
	Reputation reputation;
	MockToken mockToken;

	address owner = address(1);
	address admin = address(2);
	address renter = address(3);
	address rentee = address(4);
	address arbiter = address(5);

	function setUp() public {
		// Deploy MockToken
		mockToken = new MockToken();

		// Deploy AccessRestriction
		accessRestriction = new AccessRestriction(owner);

		// Deploy RentalDAO
		rentalDAO = new RentalDAO(address(accessRestriction), 100); // 1% initial fee

		// Deploy Escrow
		escrow = new Escrow(
			IERC20(address(mockToken)),
			address(rentalDAO),
			address(accessRestriction)
		);

		// Deploy Inspection
		inspection = new Inspection();

		// Deploy DisputeResolution
		disputeResolution = new DisputeResolution();

		// Deploy SocialFi
		socialFi = new SocialFi(IERC20(address(mockToken)));

		// Deploy Reputation
		reputation = new Reputation(address(accessRestriction));

		// Deploy RentalAgreement
		rentalAgreement = new RentalAgreement(
			IERC20(address(mockToken)),
			address(escrow),
			address(inspection),
			address(disputeResolution),
			address(socialFi),
			address(accessRestriction)
		);

		// Setup roles
		accessRestriction.grantRole(accessRestriction.ADMIN_ROLE(), admin);
		accessRestriction.grantRole(
			accessRestriction.VERFIED_USER_ROLE(),
			renter
		);
		accessRestriction.grantRole(
			accessRestriction.VERFIED_USER_ROLE(),
			rentee
		);
		accessRestriction.grantRole(accessRestriction.ARBITER_ROLE(), arbiter);

		// Initialize DisputeResolution
		disputeResolution.init(
			address(rentalAgreement),
			address(reputation),
			address(accessRestriction)
		);
	}

	function testCreateAgreement() public {
		uint256 tokenId = 1;
		uint256 rentalPeriod = 86400; // 1 day
		uint256 cost = 1 ether;
		uint256 deposit = 0.5 ether;

		vm.prank(rentee);
		rentalAgreement.createAgreement(
			renter,
			tokenId,
			rentalPeriod,
			cost,
			deposit
		);

		(address _rentee, address _renter ) = rentalAgreement
			.getAgreementParties(0);
		assertEq(_rentee, rentee);
		assertEq(_renter, renter);
	}

	// function testLockFunds() public {
	// 	uint256 agreementId = 0;
	// 	uint256 deposit = 0.5 ether;
	// 	uint256 cost = 1 ether;

	// 	// Mint and approve tokens first
	// 	mockToken.mint(renter, deposit + cost);
	// 	vm.prank(renter);
	// 	mockToken.approve(address(escrow), deposit + cost);

	// 	// Lock funds
	// 	vm.prank(renter);
	// 	escrow.lockFunds(agreementId, deposit, cost);

	// 	(uint256 lockedDeposit, uint256 lockedCost, ) = escrow.getLockedFunds(
	// 		agreementId
	// 	);
	// 	assertEq(lockedDeposit, deposit);
	// 	assertEq(lockedCost, cost);
	// }

	function testInitiateDispute() public {
		uint256 agreementId = 0;

		vm.prank(renter);
		disputeResolution.initiateDispute(agreementId);

		(bool active, ) = disputeResolution.getDispute(agreementId);
		assertEq(active, true);
	}

	function testVoteOnDispute() public {
		uint256 agreementId = 0;

		vm.prank(renter);
		disputeResolution.initiateDispute(agreementId);

		vm.prank(arbiter);
		disputeResolution.voteOnDispute(agreementId, true);

		(, bool resolved) = disputeResolution.getDispute(agreementId);
		assertEq(resolved, true);
	}

	function testRewardUser() public {
		uint256 rewardAmount = 100;

		socialFi.rewardUser(renter, rewardAmount);

		uint256 rewardBalance = socialFi.getRewardBalance(renter);
		assertEq(rewardBalance, rewardAmount);
	}

	function testUpdateReputation() public {
		uint256 agreementId = 0;
		uint256 reputationChange = 10;

		vm.prank(admin);
		reputation.updateReputation(agreementId, renter, reputationChange);

		uint256 updatedReputation = reputation.getReputation(renter);
		assertEq(updatedReputation, reputationChange);
	}
}
