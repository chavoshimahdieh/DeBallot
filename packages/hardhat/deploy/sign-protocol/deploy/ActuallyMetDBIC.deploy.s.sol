// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Script.sol";
import "../../src/ActuallyMetDBIC.sol";
import "forge-std/console.sol";

contract DeployActuallyMetDBIC is Script {     

    function run() external returns (address) {
        //we need to declare the sender's private key here to sign the deploy transaction
        
        
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Deploy the upgradeable contract

        ActuallyMetDBIC actuallyMetDBICAddress = new ActuallyMetDBIC();

        vm.stopBroadcast();

        address deployer = 0x5B5226796b9331288B8c4BaDEeB408D388B5a40c;
        console.log("Account balance:", address(deployer).balance);

        return (address(actuallyMetDBICAddress));
    }
}
