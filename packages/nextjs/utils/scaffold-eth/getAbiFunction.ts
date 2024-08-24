import { Abi, AbiFunction } from "abitype";

export const getAbiFunction = (deployedContractData: any, name: string) =>
  (deployedContractData.abi as Abi)
    .filter(part => part.type === "function")
    .filter(part => part.name === name)[0] as AbiFunction;
