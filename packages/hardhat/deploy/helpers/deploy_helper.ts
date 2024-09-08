import { Deployer } from "@solarity/hardhat-migrate";
import fs from "fs";
import path from "path";
import { Config, isZeroAddr } from "./config_parser";

const { poseidonContract } = require("circomlibjs");

import {
  ERC1967Proxy__factory,
  QueryMTPValidator__factory,
  LightweightState__factory,
  ZKPQueriesStorage__factory,
  RegisterVerifier__factory,
  GeneratedRegistrationVerifier__factory,
} from "@ethers-v6";

const deployedAddressesPath = path.resolve(
  __dirname,
  "../../../nextjs/contracts/deployedAddresses.json",
);

// Function to create the file if it doesn't exist
const ensureFileExists = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    // Create the directory if it does not exist
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    // Create an empty JSON file
    fs.writeFileSync(filePath, JSON.stringify({}), { encoding: "utf8" });
  }
};

// Function to save new deployed addresses
export const saveDeployedAddress = (contractName: string, address: string) => {
  ensureFileExists(deployedAddressesPath); // Ensure the file exists before reading/writing

  let addresses: Record<string, string> = {};
  if (fs.existsSync(deployedAddressesPath)) {
    addresses = JSON.parse(fs.readFileSync(deployedAddressesPath, "utf8")) as Record<string, string>;
  }

  addresses[contractName] = address;
  fs.writeFileSync(deployedAddressesPath, JSON.stringify(addresses, null, 2), { encoding: "utf8" });
};

// Function to clear old addresses from JSON
export const clearOldAddresses = () => {
  ensureFileExists(deployedAddressesPath); // Ensure the file exists before clearing
  fs.writeFileSync(deployedAddressesPath, JSON.stringify({}), { encoding: "utf8" });
};

export async function deployPoseidons(deployer: Deployer, poseidonSizeParams: number[]) {
  poseidonSizeParams.forEach((size) => {
    if (![1, 2, 3, 4, 5, 6].includes(size)) {
      throw new Error(`Poseidon should be integer in a range 1..6. Poseidon size provided: ${size}`);
    }
  });

  const deployPoseidon = async (size: number) => {
    const abi = poseidonContract.generateABI(size);
    const bytecode = poseidonContract.createCode(size);

    await deployer.deploy({
      abi,
      bytecode,
      contractName: `@iden3/contracts/lib/Poseidon.sol:PoseidonUnit${size}L`,
    });
  };

  for (const size of poseidonSizeParams) {
    await deployPoseidon(size);
  }
}

export async function deployQueryValidator(deployer: Deployer, config: Config) {
  if (isZeroAddr(config.validatorContractInfo.validatorAddr)) {
    const stateAddr = await (await getDeployedStateContract(deployer)).getAddress();
    const identitiesStatesUpdateTime = config.validatorContractInfo.identitiesStatesUpdateTime;

    if (!identitiesStatesUpdateTime) {
      throw new Error("Invalid identities states update time");
    }

    await deployMTPValidator(
      deployer,
      stateAddr,
      identitiesStatesUpdateTime,
      config.validatorContractInfo.zkpVerifierAddr,
    );
  } else {
    await deployer.save(QueryMTPValidator__factory, config.validatorContractInfo.validatorAddr!);
  }
}

export async function deployState(deployer: Deployer, config: Config) {
  await deployLightweightState(deployer, config);
}

export async function deployVerifier(deployer: Deployer, config: Config) {
  await deployRegisterVerifier(deployer, config);
}

export async function getDeployedQueryValidatorContract(deployer: Deployer) {
  return await deployer.deployed(QueryMTPValidator__factory, "QueryMTPValidator Proxy");
}

export async function getDeployedStateContract(deployer: Deployer) {
  return await deployer.deployed(LightweightState__factory, "LightweightState Proxy");
}

export async function getDeployedVerifierContract(deployer: Deployer) {
  return await deployer.deployed(RegisterVerifier__factory, "RegisterVerifier Proxy");
}

async function deployMTPValidator(
  deployer: Deployer,
  stateContractAddr: string,
  identitiesStatesUpdateTime: string | number,
  zkpVerifierAddr?: string,
) {
  let queryMTPVerifierAddress: string | undefined = zkpVerifierAddr;

  if (isZeroAddr(queryMTPVerifierAddress)) {
    queryMTPVerifierAddress = await (await deployer.deploy(GeneratedRegistrationVerifier__factory)).getAddress();
    saveDeployedAddress("GeneratedRegistrationVerifier", queryMTPVerifierAddress);
  }

  const queryMTPValidatorImpl = await deployer.deploy(QueryMTPValidator__factory);
  const queryMTPValidatorProxy = await deployer.deploy(
    ERC1967Proxy__factory,
    [await queryMTPValidatorImpl.getAddress(), "0x"],
    { name: "QueryMTPValidator Proxy" },
  );

  const queryMTPValidator = await deployer.deployed(
    QueryMTPValidator__factory,
    await queryMTPValidatorProxy.getAddress(),
  );

  await queryMTPValidator.__QueryMTPValidator_init(
    queryMTPVerifierAddress!,
    stateContractAddr,
    identitiesStatesUpdateTime,
  );

  return await queryMTPValidator.getAddress();
}

async function deployLightweightState(deployer: Deployer, config: Config) {
  if (isZeroAddr(config.stateContractInfo.stateAddr)) {
    const lightweightStateImpl = await deployer.deploy(LightweightState__factory);
    const lightweightStateProxy = await deployer.deploy(
      ERC1967Proxy__factory,
      [await lightweightStateImpl.getAddress(), "0x"],
      { name: "LightweightState Proxy" },
    );
    const lightweightState = await deployer.deployed(
      LightweightState__factory,
      await lightweightStateProxy.getAddress(),
    );

    if (config.stateContractInfo.stateInitParams) {
      await lightweightState.__LightweightState_init(
        config.stateContractInfo.stateInitParams.signer,
        config.stateContractInfo.stateInitParams.sourceStateContract,
        config.stateContractInfo.stateInitParams.sourceChainName,
        config.stateContractInfo.stateInitParams.chainName,
      );
    } else {
      throw new Error("Invalid state init params");
    }
  } else {
    await deployer.save(LightweightState__factory, config.stateContractInfo.stateAddr!);
  }
}

async function deployRegisterVerifier(deployer: Deployer, config: Config) {
  if (isZeroAddr(config.registerVerifierInfo.registerVerifierAddr)) {
    const registerVerifierImpl = await deployer.deploy(RegisterVerifier__factory);
    const identityVerifierProxy = await deployer.deploy(
      ERC1967Proxy__factory,
      [await registerVerifierImpl.getAddress(), "0x"],
      { name: "RegisterVerifier Proxy" },
    );

    const registerVerifier = await deployer.deployed(
      RegisterVerifier__factory,
      await identityVerifierProxy.getAddress(),
    );

    const zkpQueriesStorage = await deployer.deployed(ZKPQueriesStorage__factory, "ZKPQueriesStorage Proxy");

    await registerVerifier.__RegisterVerifier_init(
      (await zkpQueriesStorage.getAddress()) as any,
      config.registerVerifierInfo.issuingAuthorityWhitelist!,
      config.registerVerifierInfo.issuingAuthorityBlacklist!,
    );
  } else {
    await deployer.save(RegisterVerifier__factory, config.registerVerifierInfo.registerVerifierAddr!);
  }
}
