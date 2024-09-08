"use client";

import { useReducer } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useTargetNetwork } from "~~/hooks/scaffold-eth";
import { BasicWriteOnlyFunctionForm } from "~~/components/form/BasicWriteOnlyFunctionForm";
import { BasicReadOnlyFunctionForm } from "~~/components/form/BasicReadOnlyFunctionForm";
import CopyableText from "~~/components/CopyableText";

const VotingPage: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();
  const { address: connectedAddress } = useAccount();
  const { data: registrationData, isLoading: registrationLoading } = useDeployedContractInfo("Registration");
  const { data: votingData, isLoading: votingLoading } = useDeployedContractInfo("Voting");
  const { data: votingFactoryData, isLoading: votingFactoryLoading } = useDeployedContractInfo("VotingFactory");
  const { data: votingRegistryData, isLoading: votingRegistryLoading } = useDeployedContractInfo("VotingRegistry");
  const { data: voteVerifierData, isLoading: voteVerifierLoading } = useDeployedContractInfo("VoteVerifier");
  const { data: generatedRegistrationVerifierData, isLoading: generatedRegistrationVerifierLoading } =
    useDeployedContractInfo("GeneratedRegistrationVerifier");
  const { data: actuallyMetDBICData, isLoading: actuallyMetDBICLoading } = useDeployedContractInfo("ActuallyMetDBIC");
  const { data: whitelistHookData, isLoading: whitelistHookLoading } = useDeployedContractInfo("WhitelistHook");
  const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);

  if (
    registrationLoading ||
    votingLoading ||
    votingFactoryLoading ||
    votingRegistryLoading ||
    voteVerifierLoading ||
    generatedRegistrationVerifierLoading ||
    actuallyMetDBICLoading ||
    whitelistHookLoading
  ) {
    return (
      <div className="mt-14">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!registrationData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of Registration on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!votingData) {
    return (
      <p className="text-3xl mt-14">{`No contract found by the name of Voting on chain "${targetNetwork.name}"!`}</p>
    );
  }
  if (!votingFactoryData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of VotingFactory on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!votingRegistryData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of VotingRegistry on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!voteVerifierData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of voteVerifierData on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!generatedRegistrationVerifierData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of generatedRegistrationVerifierData on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!actuallyMetDBICData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of actuallyMetDBICData on chain "${targetNetwork.name}"!`}
      </p>
    );
  }
  if (!whitelistHookData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of whitelistHookData on chain "${targetNetwork.name}"!`}
      </p>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Voting</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Registration:</p>
            <Address address={registrationData.address} />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Voting:</p>
            <Address address={votingData.address} />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">VotingFactory:</p>
            <Address address={votingFactoryData.address} />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">VotingRegistry:</p>
            <Address address={votingRegistryData.address} />
          </div>
          {/* <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">ActuallyMetDBIC:</p>
            <Address address={actuallyMetDBICData.address} />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">WhitelistHook:</p>
            <Address address={whitelistHookData.address} />
          </div> */}
          <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 `}>
            <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                <div className="z-10">
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                    <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                      <div className="flex items-center justify-center space-x-2">
                        <p className="my-0 text-sm">admin</p>
                      </div>
                    </div>
                    {/* <ContractVariables
                      refreshDisplayVariables={refreshDisplayVariables}
                      deployedContractData={deployedContractData}
                    /> */}
                    <div className="p-5 divide-y divide-base-300">
                      <h1>votingFactoryData</h1>
                      <BasicWriteOnlyFunctionForm
                        contract={votingFactoryData}
                        name={"createVoting"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      voting data Params:{" "}
                      <CopyableText
                        text="remark: , registration: , votingStart: , votingPeriod: ,
                      candidates"
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={votingFactoryData}
                        name={"createVotingWithSalt"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      voting data Params:{" "}
                      <CopyableText
                        text="remark: , registration: , votingStart: , votingPeriod: ,
                      candidates"
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={votingFactoryData}
                        name={"createRegistration"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      voting data Params:{" "}
                      <CopyableText
                        text="remark: , registration: , votingStart: , votingPeriod: ,
                      candidates"
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={votingFactoryData}
                        name={"createRegistrationWithSalt"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      voting data Params:{" "}
                      <CopyableText
                        text="remark: , registration: , votingStart: , votingPeriod: ,
                      candidates"
                      />
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                    <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                      <div className="flex items-center justify-center space-x-2">
                        <p className="my-0 text-sm">Sign protocol</p>
                      </div>
                    </div>
                    <div className="p-5 divide-y divide-base-300">
                      <h1>whitelistHookData</h1>
                      <BasicWriteOnlyFunctionForm
                        contract={whitelistHookData}
                        name={"setSPInstance"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={whitelistHookData}
                        name={"setSchemaID"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={whitelistHookData}
                        name={"confirmMetDBIC"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={whitelistHookData}
                        name={"claimMetDBIC"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <h1>Read</h1>
                      <BasicReadOnlyFunctionForm
                        contract={actuallyMetDBICData}
                        name={"didReceiveAttestation"}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <BasicReadOnlyFunctionForm
                        contract={actuallyMetDBICData}
                        name={"didReceiveRevocation"}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                    <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                      <div className="flex items-center justify-center space-x-2">
                        <p className="my-0 text-sm">voter</p>
                      </div>
                    </div>
                    <div className="p-5 divide-y divide-base-300">
                      claimMetDBIC
                      <br />
                      <BasicWriteOnlyFunctionForm
                        contract={registrationData}
                        name={"register"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <BasicWriteOnlyFunctionForm
                        contract={votingData}
                        name={"vote"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                    <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                      <div className="flex items-center justify-center space-x-2">
                        <p className="my-0 text-sm">verifier</p>
                      </div>
                    </div>
                    <div className="p-5 divide-y divide-base-300">
                      <p>verifyProof from voteVerifier </p>
                      <BasicWriteOnlyFunctionForm
                        contract={voteVerifierData}
                        name={"verifyProof"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                      <p>verifyProof from GeneratedRegistrationVerifier </p>
                      <BasicWriteOnlyFunctionForm
                        contract={generatedRegistrationVerifierData}
                        name={"verifyProof"}
                        onChange={triggerRefreshDisplayVariables}
                        inheritedFrom={undefined}
                        formatName={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingPage;
