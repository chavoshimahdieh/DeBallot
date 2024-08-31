import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import fs from "fs";

import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

import "@typechain/hardhat";

import "@solarity/hardhat-migrate";
import "@solarity/hardhat-markup";

import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";

import "solidity-coverage";

import "tsconfig-paths/register";


// import "@nomicfoundation/hardhat-toolbox";
// import "@nomicfoundation/hardhat-foundry";
// import "hardhat-preprocessor";
// import "@nomicfoundation/hardhat-verify";
// import "hardhat-deploy";
// import "@solarity/hardhat-migrate";
// import "hardhat-contract-sizer";
// import "hardhat-gas-reporter";
// import "@nomicfoundation/hardhat-ethers";
// import "@nomicfoundation/hardhat-chai-matchers";
// import "@typechain/hardhat";
// import "@solarity/hardhat-markup";
// import "hardhat-abi-exporter";
// import "solidity-coverage";
// import "tsconfig-paths/register";
// import "@truffle/dashboard-hardhat-plugin";
// import "hardhat-deploy-ethers";

dotenv.config();

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

function getRemappings() {
  return fs
    .readFileSync("remappings.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line: string) => line.trim().split("="));
}

interface MyHardhatUserConfig extends HardhatUserConfig {
  preprocess?: {
    eachLine: (_hre: any) => {
      transform: (line: string) => string;
    };
  };
}

const config: MyHardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      initialDate: "1970-01-01T00:00:00Z",
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      gasMultiplier: 1.2,
    },
    qDevnet: {
      url: "https://rpc.qdevnet.org/",
      accounts: [deployerPrivateKey],
    },
    qTestnet: {
      url: "https://rpc.qtestnet.org/",
      accounts: [deployerPrivateKey],
    },
    qMainnet: {
      url: "https://rpc.q.org",
      accounts: [deployerPrivateKey],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrumSepolia: {
      url: `https://arb-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimismSepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonZkEvm: {
      url: `https://polygonzkevm-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonZkEvmTestnet: {
      url: `https://polygonzkevm-testnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [deployerPrivateKey],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [deployerPrivateKey],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [deployerPrivateKey],
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [deployerPrivateKey],
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
    scroll: {
      url: "https://rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
    pgn: {
      url: "https://rpc.publicgoods.network",
      accounts: [deployerPrivateKey],
    },
    pgnTestnet: {
      url: "https://sepolia.publicgoods.network",
      accounts: [deployerPrivateKey],
    },
    shibarium: {
      url: "https://rpc.shibrpc.com",
      accounts: [deployerPrivateKey],
      chainId: 157,
    },
    "crossfi-testnet": {
      url: "https://rpc.testnet.ms",
      accounts: [deployerPrivateKey],
      chainId: 4157,
    },
    "truffle-dashboard": {
      url: "https://localhost:24012/rpc",
    },
    rootsock: {
      url: "https://rpc.testnet.rootstock.io/IYjLilNnX96TkySQ3QeRRXzq5ev5kN-T",
      accounts: [deployerPrivateKey],
      chainId: 31,
    },
    KintoMainnet: {
      url: "https://rpc.kinto.xyz/http",
      accounts: [deployerPrivateKey],
      chainId: 7887,
    },
  },
  // configuration for harhdat-verify plugin
  // etherscan: {
  //   apiKey: `${etherscanApiKey}`,
  // },

  etherscan: {
    apiKey: `${etherscanApiKey}`,
    customChains: [
      {
        network: "qDevnet",
        chainId: 35442,
        urls: {
          apiURL: "https://explorer.qdevnet.org/api",
          browserURL: "https://explorer.qdevnet.org",
        },
      },
      {
        network: "qTestnet",
        chainId: 35443,
        urls: {
          apiURL: "https://explorer.qtestnet.org/api",
          browserURL: "https://explorer.qtestnet.org",
        },
      },
      {
        network: "qMainnet",
        chainId: 35441,
        urls: {
          apiURL: "https://explorer.q.org/api",
          browserURL: "https://explorer.q.org",
        },
      },
    ],
  },
  migrate: {
    pathToMigrations: "./deploy/",
  },
  mocha: {
    timeout: 1000000,
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
  // configuration for etherscan-verify from hardhat-deploy plugin
  // verify: {
  //   etherscan: {
  //     apiKey: `${etherscanApiKey}`,
  //   },
  // },
  // sourcify: {
  //   enabled: false,
  // },
  gasReporter: {
    currency: "USD",
    gasPrice: 50,
    enabled: false,
    coinmarketcap: `${process.env.COINMARKETCAP_KEY}`,
  },
  typechain: {
    outDir: "generated-types",
    target: "ethers-v6",
  },
  abiExporter: {
    flat: true,
  },
  preprocess: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    eachLine: (_hre: any) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match(find)) {
              line = line.replace(find, replace);
            }
          });
        }
        return line;
      },
    }),
  },
};

export default config;
