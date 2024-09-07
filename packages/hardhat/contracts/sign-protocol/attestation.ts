import {
    SignProtocolClient,
    SpMode,
    EvmChains,
    delegateSignAttestation,
    delegateSignRevokeAttestation,
    delegateSignSchema
} from '@ethsign/sp-sdk'

import {privateKeyToAccount} from 'viem/accounts'

export async function createNotaryAttestation() {
    // optional
    const privateKey = process.env.PRIVATE_KEY?.startsWith('0x')
        ? process.env.PRIVATE_KEY.replace(/^0x/, '')
        : process.env.PRIVATE_KEY

    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.sepolia,
        account: privateKeyToAccount(`0x${privateKey}`)
    })

    // create attestation
    const createAttestationRes = await client.createAttestation({
        schemaId: '0xef', // The final number from our schema's ID.
        linkedAttestationId: null, // We are not linking an attestation.
        validUntil: 0, // We are not setting an expiry date.
        revoked: false, // The attestation is not revoked.
        recipients: ['0xa2faB70F786571B142c044B879219264ED3875CD'], // Bob is our recipient.Bob is signer
        indexingValue: '0x5B5226796b9331288B8c4BaDEeB408D388B5a40c',
        attester: '0x5B5226796b9331288B8c4BaDEeB408D388B5a40c', // Alice's address.
        attestTimestamp: 0, // Will be generated for us.
        revokeTimestamp: 0, // Attestation is not revoked.
        dataLocation: 0, // We are placing data on-chain.
        data: {
            age: 4,
            nationality: 'UAE',
            walletAddress: '0xa2faB70F786571B142c044B879219264ED3875CD',
            isVerified: true
        }
    })

    // // delegation  create attestation
    // const delegationPrivateKey = '0xaaaaa';
    // const info = await delegateSignAttestation(
    //   {
    //     schemaId: '0x1',
    //     data: { name: 'a' },
    //     indexingValue: 'xxx',
    //   },
    //   {
    //     chain: EvmChains.sepolia,
    //     delegationAccount: privateKeyToAccount(delegationPrivateKey),
    //   }
    // );

    // const delegationCreateAttestationRes = await client.createAttestation(
    //   info.attestation,
    //   {
    //     delegationSignature: info.delegationSignature,
    //   }
    // );
}
