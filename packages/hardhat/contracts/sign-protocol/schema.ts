const {SignProtocolClient, SpMode, EvmChains} = require('@ethsign/sp-sdk')
const {privateKeyToAccount} = require('viem/accounts')

export async function createNotarySchema() {
    // optional
    const privateKey = process.env.PRIVATE_KEY?.startsWith('0x')
        ? process.env.PRIVATE_KEY.replace(/^0x/, '')
        : process.env.PRIVATE_KEY

    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.sepolia,
        account: privateKeyToAccount(`0x${privateKey}`)
    })

    const res = await client.createSchema({
        name: 'SDK Test',
        data: [
            {name: 'age', type: 'uint256'},
            {name: 'nationality', type: 'string'},
            {name: 'walletAddress', type: 'address'},
            {name: 'isVerified', type: 'bool'}
        ]
    })

    // // delegation create schema
    // const delegationPrivateKey = '0xaaaaa';
    // const info = await delegateSignSchema(
    //   {
    //     name: 'xxx',
    //     data: [{ name: 'name', type: 'string' }],
    //   },
    //   {
    //     chain: EvmChains.sepolia,
    //     delegationAccount: privateKeyToAccount(delegationPrivateKey),
    //   }
    // );
    // const delegateCreateSchemaRes = await client.createSchema(info.schema, {
    //   delegationSignature: info.delegationSignature,
    // });
}
