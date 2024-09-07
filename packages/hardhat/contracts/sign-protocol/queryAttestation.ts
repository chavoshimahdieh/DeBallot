import {makeAttestationRequest} from "./makeAttestatonReq";

async function queryAttestations() {
  const response = await makeAttestationRequest("index/attestations", {
    //https://testnet-rpc.sign.global/api/index/attestations
    method: "GET",
    params: {
      mode: "onchain", // Data storage location
      schemaId: "onchain_evm_11155111_0xef", // Your full schema's ID
      attester: "0x5B5226796b9331288B8c4BaDEeB408D388B5a40c", // Alice's address
      indexingValue: "0xa2faB70F786571B142c044B879219264ED3875CD".toLowerCase() // Bob's address
    }
  });

  // Make sure the request was successfully processed.
  if (!response.success) {
    return {
      success: false,
      message: response?.message ?? "Attestation query failed.",
    };
  }

  // Return a message if no attestations are found.
  if (response.data?.total === 0) {
    return {
      success: false,
      message: "No attestation for this address found.",
    };
  }

  // Return all attestations that match our query.
  return {
    success: true,
    attestations: response.data.rows,
  };
}