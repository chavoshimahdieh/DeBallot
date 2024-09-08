import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */

const externalContracts = {
  31337: {
    // hardhat
    Registration: {
      address: "0xCace1b78160AE76398F486c8a18044da0d66d86D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "registerVerifier_",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "treeHeight_",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CommitmentAlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidCommitmentPeriod",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidCommitmentStart",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationNotInCommitmentState",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "commitmentStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentPeriod",
                  type: "uint256",
                },
              ],
              indexed: false,
              internalType: "struct IRegistration.RegistrationParams",
              name: "registrationParams",
              type: "tuple",
            },
          ],
          name: "RegistrationInitialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "issuerId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "issuerState",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "merkleProof",
                      type: "bytes32[]",
                    },
                  ],
                  internalType: "struct ILightweightState.StatesMerkleData",
                  name: "statesMerkleData",
                  type: "tuple",
                },
                {
                  internalType: "uint256[]",
                  name: "inputs",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              indexed: false,
              internalType: "struct IBaseVerifier.ProveIdentityParams",
              name: "proveIdentityParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "issuingAuthority",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "documentNullifier",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "commitment",
                  type: "bytes32",
                },
              ],
              indexed: false,
              internalType: "struct IRegisterVerifier.RegisterProofParams",
              name: "registerProofParams",
              type: "tuple",
            },
          ],
          name: "UserRegistered",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "commitmentStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentPeriod",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationParams",
              name: "registrationParams_",
              type: "tuple",
            },
          ],
          name: "__Registration_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "commitments",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "key_",
              type: "bytes32",
            },
          ],
          name: "getNodeByKey",
          outputs: [
            {
              components: [
                {
                  internalType: "enum SparseMerkleTree.NodeType",
                  name: "nodeType",
                  type: "uint8",
                },
                {
                  internalType: "uint64",
                  name: "childLeft",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "childRight",
                  type: "uint64",
                },
                {
                  internalType: "bytes32",
                  name: "nodeHash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "value",
                  type: "bytes32",
                },
              ],
              internalType: "struct SparseMerkleTree.Node",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "key_",
              type: "bytes32",
            },
          ],
          name: "getProof",
          outputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "root",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32[]",
                  name: "siblings",
                  type: "bytes32[]",
                },
                {
                  internalType: "bool",
                  name: "existence",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "value",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "auxExistence",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "auxKey",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "auxValue",
                  type: "bytes32",
                },
              ],
              internalType: "struct SparseMerkleTree.Proof",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "commitmentStartTime",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "commitmentEndTime",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IRegistration.RegistrationValues",
                  name: "values",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "totalRegistrations",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IRegistration.RegistrationCounters",
                  name: "counters",
                  type: "tuple",
                },
              ],
              internalType: "struct IRegistration.RegistrationInfo",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationStatus",
          outputs: [
            {
              internalType: "enum IRegistration.RegistrationStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRoot",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "root",
              type: "bytes32",
            },
          ],
          name: "isRootExists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "documentNullifier_",
              type: "uint256",
            },
          ],
          name: "isUserRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "issuerId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "issuerState",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "merkleProof",
                      type: "bytes32[]",
                    },
                  ],
                  internalType: "struct ILightweightState.StatesMerkleData",
                  name: "statesMerkleData",
                  type: "tuple",
                },
                {
                  internalType: "uint256[]",
                  name: "inputs",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct IBaseVerifier.ProveIdentityParams",
              name: "proveIdentityParams_",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "issuingAuthority",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "documentNullifier",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "commitment",
                  type: "bytes32",
                },
              ],
              internalType: "struct IRegisterVerifier.RegisterProofParams",
              name: "registerProofParams_",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "newIdentitiesStatesRoot",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "root",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ILightweightState.GistRootData",
                  name: "gistData",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "proof",
                  type: "bytes",
                },
              ],
              internalType: "struct IBaseVerifier.TransitStateParams",
              name: "transitStateParams_",
              type: "tuple",
            },
            {
              internalType: "bool",
              name: "isTransitState_",
              type: "bool",
            },
          ],
          name: "register",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registerVerifier",
          outputs: [
            {
              internalType: "contract IRegisterVerifier",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registrationInfo",
          outputs: [
            {
              internalType: "string",
              name: "remark",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "commitmentStartTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentEndTime",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationValues",
              name: "values",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "totalRegistrations",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationCounters",
              name: "counters",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "rootsHistory",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "smtTreeMaxDepth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    Voting: {
      address: "0xD5ac451B0c50B9476107823Af206eD814a2e2580",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "voteVerifier_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CandidateDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "CandidatesMustBeProvided",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidVoteProof",
          type: "error",
        },
        {
          inputs: [],
          name: "NullifierAlreadyUsed",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationContractMustBeProvided",
          type: "error",
        },
        {
          inputs: [],
          name: "RootDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyCandidates",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingNotInPendingState",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingPeriodMustBeGreaterThanZero",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingStartMustBeAfterRegistrationEnd",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingStartMustBeInFuture",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "root",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "nullifierHash",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "candidate",
              type: "bytes32",
            },
          ],
          name: "UserVoted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "contract IRegistration",
                  name: "registration",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votingStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingPeriod",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              indexed: false,
              internalType: "struct IVoting.VotingParams",
              name: "votingParams",
              type: "tuple",
            },
          ],
          name: "VotingInitialized",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_CANDIDATES",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "contract IRegistration",
                  name: "registration",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votingStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingPeriod",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              internalType: "struct IVoting.VotingParams",
              name: "votingParams_",
              type: "tuple",
            },
          ],
          name: "__Voting_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "candidates",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProposalStatus",
          outputs: [
            {
              internalType: "enum IVoting.VotingStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationAddresses",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "nullifiers",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registration",
          outputs: [
            {
              internalType: "contract IRegistration",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "root_",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "nullifierHash_",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "candidate_",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct VerifierHelper.ProofPoints",
              name: "proof_",
              type: "tuple",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "voteVerifier",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "votesPerCandidate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "votingInfo",
          outputs: [
            {
              internalType: "string",
              name: "remark",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "votingStartTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingEndTime",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              internalType: "struct IVoting.VotingValues",
              name: "values",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "votesCount",
                  type: "uint256",
                },
              ],
              internalType: "struct IVoting.VotingCounters",
              name: "counters",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    VotingFactory: {
      address: "0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "OnlyRegistryOwnerCanUpgrade",
          type: "error",
        },
        {
          inputs: [],
          name: "PoolTypeDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingPoolDoesNotSupportIVotingPool",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "instanceType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "voting",
              type: "address",
            },
          ],
          name: "InstanceCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "votingRegistry_",
              type: "address",
            },
          ],
          name: "__VotingFactory_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "registrationType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
          ],
          name: "createRegistration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "registrationType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "createRegistrationWithSalt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "votingType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
          ],
          name: "createVoting",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "votingType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "createVotingWithSalt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "predictAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingRegistry",
          outputs: [
            {
              internalType: "contract IVotingRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    VotingRegistry: {
      address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AddressIsNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "LengthMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyFactoryCanCall",
          type: "error",
        },
        {
          inputs: [],
          name: "PoolTypeCannotBeEmpty",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationPoolNotFound",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingContractAlreadyBound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "poolFactory_",
              type: "address",
            },
          ],
          name: "__VotingRegistry_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "addProxyPool",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "voting_",
              type: "address",
            },
            {
              internalType: "address",
              name: "registration_",
              type: "address",
            },
          ],
          name: "bindVotingToRegistration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "getPoolImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "registration_",
              type: "address",
            },
          ],
          name: "getVotingForRegistration",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByProposer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByProposerAndType",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByType",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByProposer",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByProposerAndType",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByType",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
          ],
          name: "poolCountByProposer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "poolCountByProposerAndType",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "poolCountByType",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "poolFactory",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "poolTypes_",
              type: "string[]",
            },
            {
              internalType: "address[]",
              name: "newImplementations_",
              type: "address[]",
            },
          ],
          name: "setNewImplementations",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    GeneratedRegistrationVerifier: {
      address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "_pA",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[2][2]",
              name: "_pB",
              type: "uint256[2][2]",
            },
            {
              internalType: "uint256[2]",
              name: "_pC",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[13]",
              name: "_pubSignals",
              type: "uint256[13]",
            },
          ],
          name: "verifyProof",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    VoteVerifier: {
      address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "_pA",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[2][2]",
              name: "_pB",
              type: "uint256[2][2]",
            },
            {
              internalType: "uint256[2]",
              name: "_pC",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[4]",
              name: "_pubSignals",
              type: "uint256[4]",
            },
          ],
          name: "verifyProof",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    ActuallyMetDBIC: {
      address: "0x0A1738dC5f33387429ABFCd52eafC4267b92AAE2",
      abi: [
        {
          type: "function",
          name: "didReceiveAttestation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "didReceiveAttestation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "didReceiveRevocation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "didReceiveRevocation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setWhitelist",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "allowed",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "whitelist",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "allowed",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "UnauthorizedAttester",
          inputs: [],
        },
      ],
    },
    WhitelistHook: {
      address: "0x7d4690Ae94740A60cB0A3A35157c18a0419e1aD1",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimMetDBIC",
          inputs: [
            {
              name: "partyB",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "confirmMetDBIC",
          inputs: [
            {
              name: "partyA",
              type: "address",
              internalType: "address",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "metDBICMapping",
          inputs: [
            {
              name: "partyA",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "partyB",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "schemaId",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setSPInstance",
          inputs: [
            {
              name: "instance",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSchemaID",
          inputs: [
            {
              name: "schemaId_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "spInstance",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract ISP",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "DidMeetDBIC",
          inputs: [
            {
              name: "partyA",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "partyB",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "attestationId",
              type: "uint64",
              indexed: false,
              internalType: "uint64",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ConfirmationAddressMismatch",
          inputs: [],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
      ],
    },
  },
  11155111: {
    // sepolia
    Registration: {
      address: "0xCace1b78160AE76398F486c8a18044da0d66d86D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "registerVerifier_",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "treeHeight_",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CommitmentAlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidCommitmentPeriod",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidCommitmentStart",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationNotInCommitmentState",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "commitmentStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentPeriod",
                  type: "uint256",
                },
              ],
              indexed: false,
              internalType: "struct IRegistration.RegistrationParams",
              name: "registrationParams",
              type: "tuple",
            },
          ],
          name: "RegistrationInitialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "issuerId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "issuerState",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "merkleProof",
                      type: "bytes32[]",
                    },
                  ],
                  internalType: "struct ILightweightState.StatesMerkleData",
                  name: "statesMerkleData",
                  type: "tuple",
                },
                {
                  internalType: "uint256[]",
                  name: "inputs",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              indexed: false,
              internalType: "struct IBaseVerifier.ProveIdentityParams",
              name: "proveIdentityParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "issuingAuthority",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "documentNullifier",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "commitment",
                  type: "bytes32",
                },
              ],
              indexed: false,
              internalType: "struct IRegisterVerifier.RegisterProofParams",
              name: "registerProofParams",
              type: "tuple",
            },
          ],
          name: "UserRegistered",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "commitmentStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentPeriod",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationParams",
              name: "registrationParams_",
              type: "tuple",
            },
          ],
          name: "__Registration_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "commitments",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "key_",
              type: "bytes32",
            },
          ],
          name: "getNodeByKey",
          outputs: [
            {
              components: [
                {
                  internalType: "enum SparseMerkleTree.NodeType",
                  name: "nodeType",
                  type: "uint8",
                },
                {
                  internalType: "uint64",
                  name: "childLeft",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "childRight",
                  type: "uint64",
                },
                {
                  internalType: "bytes32",
                  name: "nodeHash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "value",
                  type: "bytes32",
                },
              ],
              internalType: "struct SparseMerkleTree.Node",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "key_",
              type: "bytes32",
            },
          ],
          name: "getProof",
          outputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "root",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32[]",
                  name: "siblings",
                  type: "bytes32[]",
                },
                {
                  internalType: "bool",
                  name: "existence",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "value",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "auxExistence",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "auxKey",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "auxValue",
                  type: "bytes32",
                },
              ],
              internalType: "struct SparseMerkleTree.Proof",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "commitmentStartTime",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "commitmentEndTime",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IRegistration.RegistrationValues",
                  name: "values",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "totalRegistrations",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IRegistration.RegistrationCounters",
                  name: "counters",
                  type: "tuple",
                },
              ],
              internalType: "struct IRegistration.RegistrationInfo",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationStatus",
          outputs: [
            {
              internalType: "enum IRegistration.RegistrationStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRoot",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "root",
              type: "bytes32",
            },
          ],
          name: "isRootExists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "documentNullifier_",
              type: "uint256",
            },
          ],
          name: "isUserRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "issuerId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "issuerState",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "merkleProof",
                      type: "bytes32[]",
                    },
                  ],
                  internalType: "struct ILightweightState.StatesMerkleData",
                  name: "statesMerkleData",
                  type: "tuple",
                },
                {
                  internalType: "uint256[]",
                  name: "inputs",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct IBaseVerifier.ProveIdentityParams",
              name: "proveIdentityParams_",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "issuingAuthority",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "documentNullifier",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "commitment",
                  type: "bytes32",
                },
              ],
              internalType: "struct IRegisterVerifier.RegisterProofParams",
              name: "registerProofParams_",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "newIdentitiesStatesRoot",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "root",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "createdAtTimestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ILightweightState.GistRootData",
                  name: "gistData",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "proof",
                  type: "bytes",
                },
              ],
              internalType: "struct IBaseVerifier.TransitStateParams",
              name: "transitStateParams_",
              type: "tuple",
            },
            {
              internalType: "bool",
              name: "isTransitState_",
              type: "bool",
            },
          ],
          name: "register",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registerVerifier",
          outputs: [
            {
              internalType: "contract IRegisterVerifier",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registrationInfo",
          outputs: [
            {
              internalType: "string",
              name: "remark",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "commitmentStartTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "commitmentEndTime",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationValues",
              name: "values",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "totalRegistrations",
                  type: "uint256",
                },
              ],
              internalType: "struct IRegistration.RegistrationCounters",
              name: "counters",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "rootsHistory",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "smtTreeMaxDepth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    Voting: {
      address: "0xD5ac451B0c50B9476107823Af206eD814a2e2580",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "voteVerifier_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CandidateDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "CandidatesMustBeProvided",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidVoteProof",
          type: "error",
        },
        {
          inputs: [],
          name: "NullifierAlreadyUsed",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationContractMustBeProvided",
          type: "error",
        },
        {
          inputs: [],
          name: "RootDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyCandidates",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingNotInPendingState",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingPeriodMustBeGreaterThanZero",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingStartMustBeAfterRegistrationEnd",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingStartMustBeInFuture",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "root",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "nullifierHash",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "candidate",
              type: "bytes32",
            },
          ],
          name: "UserVoted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "contract IRegistration",
                  name: "registration",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votingStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingPeriod",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              indexed: false,
              internalType: "struct IVoting.VotingParams",
              name: "votingParams",
              type: "tuple",
            },
          ],
          name: "VotingInitialized",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_CANDIDATES",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "contract IRegistration",
                  name: "registration",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "remark",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votingStart",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingPeriod",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              internalType: "struct IVoting.VotingParams",
              name: "votingParams_",
              type: "tuple",
            },
          ],
          name: "__Voting_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "candidates",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProposalStatus",
          outputs: [
            {
              internalType: "enum IVoting.VotingStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistrationAddresses",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "nullifiers",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registration",
          outputs: [
            {
              internalType: "contract IRegistration",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "root_",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "nullifierHash_",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "candidate_",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct VerifierHelper.ProofPoints",
              name: "proof_",
              type: "tuple",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "voteVerifier",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "votesPerCandidate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "votingInfo",
          outputs: [
            {
              internalType: "string",
              name: "remark",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "votingStartTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "votingEndTime",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "candidates",
                  type: "bytes32[]",
                },
              ],
              internalType: "struct IVoting.VotingValues",
              name: "values",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "votesCount",
                  type: "uint256",
                },
              ],
              internalType: "struct IVoting.VotingCounters",
              name: "counters",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    VotingFactory: {
      address: "0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "OnlyRegistryOwnerCanUpgrade",
          type: "error",
        },
        {
          inputs: [],
          name: "PoolTypeDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingPoolDoesNotSupportIVotingPool",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "instanceType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "voting",
              type: "address",
            },
          ],
          name: "InstanceCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "votingRegistry_",
              type: "address",
            },
          ],
          name: "__VotingFactory_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "registrationType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
          ],
          name: "createRegistration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "registrationType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "createRegistrationWithSalt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "votingType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
          ],
          name: "createVoting",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "votingType_",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data_",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "createVotingWithSalt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt_",
              type: "bytes32",
            },
          ],
          name: "predictAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingRegistry",
          outputs: [
            {
              internalType: "contract IVotingRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    VotingRegistry: {
      address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AddressIsNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "LengthMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyFactoryCanCall",
          type: "error",
        },
        {
          inputs: [],
          name: "PoolTypeCannotBeEmpty",
          type: "error",
        },
        {
          inputs: [],
          name: "RegistrationPoolNotFound",
          type: "error",
        },
        {
          inputs: [],
          name: "VotingContractAlreadyBound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "poolFactory_",
              type: "address",
            },
          ],
          name: "__VotingRegistry_init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "addProxyPool",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "voting_",
              type: "address",
            },
            {
              internalType: "address",
              name: "registration_",
              type: "address",
            },
          ],
          name: "bindVotingToRegistration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "getPoolImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "registration_",
              type: "address",
            },
          ],
          name: "getVotingForRegistration",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByProposer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByProposerAndType",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "address",
              name: "pool_",
              type: "address",
            },
          ],
          name: "isPoolExistByType",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByProposer",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByProposerAndType",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "offset_",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "limit_",
              type: "uint256",
            },
          ],
          name: "listPoolsByType",
          outputs: [
            {
              internalType: "address[]",
              name: "pools_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
          ],
          name: "poolCountByProposer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proposer_",
              type: "address",
            },
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "poolCountByProposerAndType",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "poolType_",
              type: "string",
            },
          ],
          name: "poolCountByType",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "poolFactory",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "poolTypes_",
              type: "string[]",
            },
            {
              internalType: "address[]",
              name: "newImplementations_",
              type: "address[]",
            },
          ],
          name: "setNewImplementations",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    VoteVerifier: {
      address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "_pA",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[2][2]",
              name: "_pB",
              type: "uint256[2][2]",
            },
            {
              internalType: "uint256[2]",
              name: "_pC",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[4]",
              name: "_pubSignals",
              type: "uint256[4]",
            },
          ],
          name: "verifyProof",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    ActuallyMetDBIC: {
      address: "0x0A1738dC5f33387429ABFCd52eafC4267b92AAE2",
      abi: [
        {
          type: "function",
          name: "didReceiveAttestation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "didReceiveAttestation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "didReceiveRevocation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "didReceiveRevocation",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setWhitelist",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
            {
              name: "allowed",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "whitelist",
          inputs: [
            {
              name: "attester",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "allowed",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "UnauthorizedAttester",
          inputs: [],
        },
      ],
    },
    WhitelistHook: {
      address: "0x7d4690Ae94740A60cB0A3A35157c18a0419e1aD1",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimMetDBIC",
          inputs: [
            {
              name: "partyB",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "confirmMetDBIC",
          inputs: [
            {
              name: "partyA",
              type: "address",
              internalType: "address",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "metDBICMapping",
          inputs: [
            {
              name: "partyA",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "partyB",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "schemaId",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setSPInstance",
          inputs: [
            {
              name: "instance",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSchemaID",
          inputs: [
            {
              name: "schemaId_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "spInstance",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract ISP",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "DidMeetDBIC",
          inputs: [
            {
              name: "partyA",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "partyB",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "attestationId",
              type: "uint64",
              indexed: false,
              internalType: "uint64",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ConfirmationAddressMismatch",
          inputs: [],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
