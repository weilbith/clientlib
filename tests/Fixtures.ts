import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import {
  WALLET_TYPE_ETHERS,
  WALLET_TYPE_IDENTITY
} from '../src/wallets/TLWallet'

import { TLNetwork } from '../src/TLNetwork'
import { EthersWalletSchema, TLWalletSchema } from '../src/typings'
import identityConfig from './e2e-config/addresses.json'

export const keystore1 = `{"encSeed":{"encStr":"I4qBGJUmpzHUQoVRMkjMEAqGusa4oI7HEG7SQMYPO31OIH+UlFtEDGfOuADzFYsfHKMbImJIOnhEg5z3VzvnndRlV9V9zHjbPgOysoMkF0K3ZR7DtamiBhk2CW3s8gx9Y2liECI03gOzz2Z51/jFLtDVrKs8HaF+ao4AnpmBZ9BgmX1F2fcZvA==","nonce":"nToBO+VpArhjS3PtICUBpjpc5cEDcmQ0"},"encHdRootPriv":{"encStr":"MMfdnPGEYRuPvOGaZvjrqHkrC+QT+GYSk1Nj1n76BbGjx3Kv37Rptb74wEcL7oRsBDJDHN1fLbeeXdwW6ZoGZaGnB8K+mdNBq+84PMGyfs/pvEQ4b81mPYP/Nw/Lgy8MwvSnwqupI8ZtA67zBDSSTWaQ1qN16Y4CID2SUEaJtQ==","nonce":"Tdsr0BdTZxaP655dmg1l14g8HdF3nTcl"},"addresses":["f8e191d2cd72ff35cb8f012685a29b31996614ea"],"encPrivKeys":{"f8e191d2cd72ff35cb8f012685a29b31996614ea":{"key":"of9sXYDnUtDeO8x3XYS50NN3XtyKXIvgNlfH773sbQAbqvUHqzmKRnMsb45Vlgup","nonce":"dfinYhD8qUzMM9KyK5fpnUmEh1hrEQDE"}},"hdPathString":"m/44\'/60\'/0\'/0","salt":"Wz3bQi0l8ZMncTBB5qTNjXS/uneTMZakQsVrA7Eo9YM=","hdIndex":1,"version":3}`

export const keystore2 = `{"encSeed":{"encStr":"UJrWA2ZaPF6lnWVktF/VjtLFJ3EZRpmhaw/wWMxMpNIxllyslNFtPSO4fWCn5v5hXqbjD9cCCWoRFYhKeXUsp2bN4uU6TJbQfGEtpT4ptOmoo4TJKbZNdIYq4ldDh7LidayT49zd+0+Qo4/ZP8Kj4NVQO7BaqkZgUhv41gr68nMWErecZhBXNQ==","nonce":"iJpRWz6rlhWlV0EF/Ig4/nvYmBq1H5II"},"ksData":{"m/44'/60'/0'/0":{"info":{"curve":"secp256k1","purpose":"sign"},"encHdPathPriv":{"encStr":"iXJJHp3vDwQOeBkhcmp6+4B7NGnf4CYxBRRYOk2DxZEz0SSJM0F1woJn1rQi3nRVdxFoUfVXEhUHr3Nkw+4B+jGX0LWjG81DkJ9ovSe/3BMSkXyUwFyZgyOLFinLrMH22uJ7BT0l9h5e9plLTzjsvLk+7q8YrKgylGt/6flFKA==","nonce":"0wLXvs0gppLxHMpOAnX/kQkTnNCL5467"},"hdIndex":1,"encPrivKeys":{"ce2d6f8bc55a61428d32947bc9bc7f2de1640b18":{"key":"t4pBsWrvJx3Zn/msrNAmJuH7btIawqhTUasDl12evPBcG3eKoljEyJF5dG3N5QOK","nonce":"du/KqEumtY9nbxT5Zs23i8zi5AterRTY"}},"addresses":["ce2d6f8bc55a61428d32947bc9bc7f2de1640b18"]},"m/44'/60'/0'/1":{"info":{"curve":"curve25519","purpose":"asymEncrypt"},"encHdPathPriv":{"encStr":"eqNBlf119aaDQRTCWW14OJtvTba7EkaFEw30BuXHvNG61h/0e9qC59sF1TvNqSg2fhWFzWN7Z9WJd5f+Yy6dq6487goJuc/UhI99wlvHhG+p7mIsSfP5QayV1U2XZv+JTHbU3nfRs91dhzIhc4j3lUySbm3pfmEPnqaxoCHe9A==","nonce":"52IHSj2WeHDWyqazIaeBrMnClAyFk4Ut"},"hdIndex":1,"encPrivKeys":{"423b6f895e9eda6dff738c9e572b17dd76db460564b71a9eef864ac89930eb77":{"key":"db4QvXmmb/Rk/xaVHurnAhjEzWn+KNeLo/y92j/ffG3a1slJu27CWsIVMfCKAKNT","nonce":"IHnuBp4VDGl4wR7zJ5ikdG6OqTQFMH4b"}},"pubKeys":["423b6f895e9eda6dff738c9e572b17dd76db460564b71a9eef864ac89930eb77"]}},"encHdRootPriv":{"encStr":"rIUuzH9VunRl3TzfsmDhOqFd8s083i+2rTeRBOTIm6sRVTSlwPmFnpLXLZji60mzGBkUpmcYvV7t10EA/UyT3pBVC+D+9KrWLT9GieTAJIEYryJUBFXr05OSBOziSOcTBp8a1LEFkvrgUuApqLmsHN3j+VDyZIOXsiHqR67ofg==","nonce":"Clkz0qaQ8YIUf8EaicZq8S5AfHz4o2vQ"},"salt":"jICGZMaFF14gIhzmxG/twe/et3UpMhHfH0cYxGPljXg=","version":2}`

export const keystore3 =
  '{"encSeed":{"encStr":"eEM0n29iCxQIm67Xt5XQseVllcfNEX1PTV5COHBxaUlmyOASd8jmTRjB1ruItlUqB0+T758EQz1oCgRfW6oluGI2SEF5liaNf4ku2wqpgMMJX3xKhiCQ4oeSEAM/SfmZ/TQ4S+14crRgsZxS8fDdu2G8uOT6DWJ3LpOY3aKW34BIA5YepfjrFg==","nonce":"Wsc2oXdrXX/LSbZ4n6pciSHd+MPJ5eeN"},"encHdRootPriv":{"encStr":"qHQ6BXF6SZoku0++cPMfG3/cOmqR+Zzk95CCk0vnMUluvbIaqEK+wN4Sc0trcnUmIOoOtFrO15lgJETMcjB/nHBLAmSdeVH92rLBB5GIMA2AHXf4GYXETgl/Z8rq6Rm3GvqLFKwghewFspvgV5Ykjritd7/yajxsSKye7DcW1Q==","nonce":"9MfuGFodFQP9fmD3+OUz9oKCURDd16r/"},"addresses":["c7d6401b81a2f70c5906e8a6fbebe680c69fa03d"],"encPrivKeys":{"c7d6401b81a2f70c5906e8a6fbebe680c69fa03d":{"key":"nrum/qp+I6oF+AypB/6xVDdbmH7S4plVf3VxSCmRwiz8rF3HDyLwafYh3Hur4foC","nonce":"/HC96G1H5OCXCJSPN5Z5Rq4++3d1C+TO"}},"hdPathString":"m/44\'/60\'/0\'/0","salt":"pXfIg1o/mPRVUwiXBkYnl0WpJfu4oRqi61rjZx1SfNY=","hdIndex":1,"version":3}'

export const identityFactoryAddress = identityConfig.identityProxyFactory

export const identityImplementationAddress =
  identityConfig.identityImplementation

export const tlNetworkConfig = {
  host: process.env.RELAY_HOSTNAME || 'localhost',
  path: 'api/v1/',
  port: 5000,
  protocol: 'http'
}

export const tlNetworkConfigIdentity = {
  host: process.env.RELAY_HOSTNAME || 'localhost',
  path: 'api/v1/',
  port: 5000,
  protocol: 'http',
  walletType: WALLET_TYPE_IDENTITY,
  identityFactoryAddress: identityConfig.identityProxyFactory,
  identityImplementationAddress: identityConfig.identityImplementation
}

export const parametrizedTLNetworkConfig = [
  { config: tlNetworkConfig, walletType: 'Ethers' },
  { config: tlNetworkConfigIdentity, walletType: 'Identity' }
]

export const user1 = {
  address: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  keystore: keystore1
}

export const user2 = {
  address: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
  keystore: keystore2
}

export const user3 = {
  address: '0xc7D6401b81A2F70C5906e8A6FBEbE680c69fA03D',
  keystore: keystore3
}

export const extraData = '0x12ab34ef'

export async function createAndLoadUsers(tlInstances: TLNetwork[]) {
  return Promise.all(
    tlInstances.map(async tl => {
      const createdUser = await tl.user.create()
      await tl.user.load(createdUser.wallet)
      return createdUser
    })
  )
}

export async function deployIdentities(tlInstances: TLNetwork[]) {
  return Promise.all(tlInstances.map(tl => tl.user.deployIdentity()))
}

export function requestEth(tlInstances) {
  return Promise.all(tlInstances.map(tl => tl.user.requestEth()))
}

export async function setTrustlines(networkAddress, tl1, tl2, given, received) {
  const [tx1, tx2] = await Promise.all([
    tl1.trustline.prepareUpdate(
      networkAddress,
      tl2.user.address,
      given,
      received
    ),
    tl2.trustline.prepareUpdate(
      networkAddress,
      tl1.user.address,
      received,
      given
    )
  ])
  await Promise.all([
    tl1.trustline.confirm(tx1.rawTx),
    tl2.trustline.confirm(tx2.rawTx)
  ])
  await wait()
  return
}

export function wait(ms = 2000) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// NOTE: Encrypted with 'ts'
export const ETHERS_JSON_KEYSTORE_1 = `{"address":"f9fd1daf400404a62b8cdcb1834317894c714625","id":"58f882de-6c78-4ef5-a260-ea41078080a5","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"3b2df3f31c4a65e3b0f932199b6fca91"},"ciphertext":"64aeb97e2bbac76e92535ba770c18caaf4e54b2aa383912b205079d587f35809","kdf":"scrypt","kdfparams":{"salt":"c0e4776c2e04d134c02d8310e542e74f151b8dc288e6e194d20fc1f1e894257e","n":131072,"dklen":32,"p":1,"r":8},"mac":"af27838802b5095713c2127b932ad049c873f9b6498586fa4e4b00ca0b6c8b89"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2019-01-29T09-34-34.0Z--f9fd1daf400404a62b8cdcb1834317894c714625","mnemonicCounter":"0ffc0cd7eab7e49dc2ef31d14e67be4b","mnemonicCiphertext":"0dc419d4eb3b37f5f0d0a815f4cdbeb6","version":"0.1"}}`
export const ETHERS_JSON_KEYSTORE_2 = `{"address":"21b07ba7af3688270cd6ec3f58f4b565fc8784f1","id":"35cca2ab-94d4-4176-a720-2d6ec2f50126","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"4b5a4b705e7b4118bca20950358ee647"},"ciphertext":"dfa85ec83411225c41229f9f125a065ac980c6824ab51053b408094ffad18a52","kdf":"scrypt","kdfparams":{"salt":"0b9d2cb7dc928a124f8dac54ce1a93773dad1a7fdf9e8956cb828e856b09ae01","n":131072,"dklen":32,"p":1,"r":8},"mac":"95bca4f6c91e2f5c70cf2e0ee0b2cc64f14367aa3d3ab4ba2956f09054e237ed"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2019-01-29T11-19-08.0Z--21b07ba7af3688270cd6ec3f58f4b565fc8784f1","mnemonicCounter":"4ee2894cad48c1fd5169b77372fb0f11","mnemonicCiphertext":"2a4c719dca87236c01ff07c47479eec3","version":"0.1"}}`
export const ETHERS_JSON_KEYSTORE_3 = `{"address":"bc2b254c2b6a3cb288940e1b0cc7656bbb56aa95","id":"92948846-b0c6-4515-8ec1-4917be740779","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"b9f2d9502297108dbe6ec5c5a99c1cca"},"ciphertext":"522e8a3333db4dbda7ac1c0ee34b1861c85331b764200f1649c8bee4f1f2e620","kdf":"scrypt","kdfparams":{"salt":"12bfecec25bf42db1d22817f9e2efb94b8def753b487c5a3d1b2da9208425a0e","n":131072,"dklen":32,"p":1,"r":8},"mac":"bb9e73e2e0cb7ccecade6f5655663f0b1b261e72c58b1bae289408462e4a5de1"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2019-01-29T11-27-58.0Z--bc2b254c2b6a3cb288940e1b0cc7656bbb56aa95","mnemonicCounter":"d2e098a9ae633867463cb37022c450c9","mnemonicCiphertext":"b301d4f40302f10eec6da03c934b958a","version":"0.1"}}`

export const WALLET_JSON_ETHERS_V1 = `{"TLWalletVersion":1,"ethersKeystore":"{\\"address\\":\\"f9fd1daf400404a62b8cdcb1834317894c714625\\",\\"id\\":\\"58f882de-6c78-4ef5-a260-ea41078080a5\\",\\"version\\":3,\\"Crypto\\":{\\"cipher\\":\\"aes-128-ctr\\",\\"cipherparams\\":{\\"iv\\":\\"3b2df3f31c4a65e3b0f932199b6fca91\\"},\\"ciphertext\\":\\"64aeb97e2bbac76e92535ba770c18caaf4e54b2aa383912b205079d587f35809\\",\\"kdf\\":\\"scrypt\\",\\"kdfparams\\":{\\"salt\\":\\"c0e4776c2e04d134c02d8310e542e74f151b8dc288e6e194d20fc1f1e894257e\\",\\"n\\":131072,\\"dklen\\":32,\\"p\\":1,\\"r\\":8},\\"mac\\":\\"af27838802b5095713c2127b932ad049c873f9b6498586fa4e4b00ca0b6c8b89\\"},\\"x-ethers\\":{\\"client\\":\\"ethers.js\\",\\"gethFilename\\":\\"UTC--2019-01-29T09-34-34.0Z--f9fd1daf400404a62b8cdcb1834317894c714625\\",\\"mnemonicCounter\\":\\"0ffc0cd7eab7e49dc2ef31d14e67be4b\\",\\"mnemonicCiphertext\\":\\"0dc419d4eb3b37f5f0d0a815f4cdbeb6\\",\\"version\\":\\"0.1\\"}}","walletType":"WalletTypeEthers"}`
export const WALLET_JSON_IDENTITY_V1 = `{"TLWalletVersion":1,"identityAddress":"0x8125d8ee13FC4dB90E08adee64e054a443C9d926","ethersKeystore":"{\\"address\\":\\"f9fd1daf400404a62b8cdcb1834317894c714625\\",\\"id\\":\\"58f882de-6c78-4ef5-a260-ea41078080a5\\",\\"version\\":3,\\"Crypto\\":{\\"cipher\\":\\"aes-128-ctr\\",\\"cipherparams\\":{\\"iv\\":\\"3b2df3f31c4a65e3b0f932199b6fca91\\"},\\"ciphertext\\":\\"64aeb97e2bbac76e92535ba770c18caaf4e54b2aa383912b205079d587f35809\\",\\"kdf\\":\\"scrypt\\",\\"kdfparams\\":{\\"salt\\":\\"c0e4776c2e04d134c02d8310e542e74f151b8dc288e6e194d20fc1f1e894257e\\",\\"n\\":131072,\\"dklen\\":32,\\"p\\":1,\\"r\\":8},\\"mac\\":\\"af27838802b5095713c2127b932ad049c873f9b6498586fa4e4b00ca0b6c8b89\\"},\\"x-ethers\\":{\\"client\\":\\"ethers.js\\",\\"gethFilename\\":\\"UTC--2019-01-29T09-34-34.0Z--f9fd1daf400404a62b8cdcb1834317894c714625\\",\\"mnemonicCounter\\":\\"0ffc0cd7eab7e49dc2ef31d14e67be4b\\",\\"mnemonicCiphertext\\":\\"0dc419d4eb3b37f5f0d0a815f4cdbeb6\\",\\"version\\":\\"0.1\\"}}","walletType":"WalletTypeIdentity"}`

export const TL_WALLET: TLWalletSchema = {
  TLWalletVersion: 2,
  walletType: WALLET_TYPE_ETHERS,
  meta: {}
}

export const USER_1_ADDRESS = '0xF9fD1DaF400404A62B8cDCb1834317894c714625'
export const USER_1_IDENTITY_ADDRESS =
  '0x8125d8ee13FC4dB90E08adee64e054a443C9d926'
export const USER_1 = {
  address: USER_1_ADDRESS,
  keystore: ETHERS_JSON_KEYSTORE_1,
  mnemonic:
    'deer cave charge core farm retire daughter peanut project multiply smart wash',
  password: 'ts',
  privateKey:
    '0xf6692380c18c54bba568dcfcb825ae89dafe16cdcea65e68fdf7e85bde5d8bf0'
}

export const USER_2 = {
  address: '0x21b07bA7Af3688270cd6Ec3f58f4b565fc8784F1',
  keystore: ETHERS_JSON_KEYSTORE_2,
  password: 'ts'
}

export const USER_3 = {
  address: '0xbC2B254C2B6A3cB288940e1b0CC7656Bbb56AA95',
  keystore: ETHERS_JSON_KEYSTORE_3,
  password: 'ts'
}

export const USER_1_ETHERS_WALLET_V1 = {
  address: USER_1_ADDRESS,
  mnemonic:
    'deer cave charge core farm retire daughter peanut project multiply smart wash',
  password: 'ts',
  privateKey:
    '0xf6692380c18c54bba568dcfcb825ae89dafe16cdcea65e68fdf7e85bde5d8bf0',
  serializedWallet: WALLET_JSON_ETHERS_V1
}

export const USER_1_IDENTITY_WALLET_V1 = {
  address: USER_1_IDENTITY_ADDRESS,
  mnemonic:
    'deer cave charge core farm retire daughter peanut project multiply smart wash',
  password: 'ts',
  privateKey:
    '0xf6692380c18c54bba568dcfcb825ae89dafe16cdcea65e68fdf7e85bde5d8bf0',
  serializedWallet: WALLET_JSON_IDENTITY_V1
}

export const IDENTITY_FACTORY_ADDRESS =
  '0x8688966AE53807c273D8B9fCcf667F0A0a91b1d3'
export const IDENTITY_IMPLEMENTATION_ADDRESS =
  '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
export const IDENTITY_OWNER_ADDRESS =
  '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf'
export const IDENTITY_ADDRESS = '0xFc22014081799F6eb79feCca92486EbDd276229b'

export const FAKE_NETWORK = {
  abbreviation: 'CASH',
  address: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  customInterests: false,
  decimals: 2,
  defaultInterestRate: {
    decimals: 3,
    raw: '10',
    value: '0.01'
  },
  interestRateDecimals: 3,
  name: 'Cash',
  numUsers: 100
}

export const FAKE_USER_ADDRESSES = [
  '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
  '0xc7D6401b81A2F70C5906e8A6FBEbE680c69fA03D'
]

export const FAKE_AMOUNT = {
  decimals: 2,
  raw: '100',
  value: '1'
}

export const FAKE_USER = {
  balance: 100,
  balanceFrozen: 100,
  given: 300,
  leftGiven: 100,
  leftReceived: 400,
  received: 300
}

export const FAKE_IDENTITY = {
  balance: '1000',
  identity: USER_1_IDENTITY_ADDRESS,
  nextNonce: 10
}

export const FAKE_VALUE_TX_OBJECT_INTERNAL = {
  ethFees: {
    decimals: 18,
    raw: new BigNumber(1000000000000000000),
    value: new BigNumber(1)
  },
  rawTx: {
    from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
    gasLimit: new BigNumber(6000000),
    gasPrice: new BigNumber(1000000),
    nonce: 100,
    to: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
    value: new BigNumber(1000000)
  }
}

export const FAKE_FUNC_TX_OBJECT_INTERNAL = {
  ethFees: {
    decimals: 18,
    raw: new BigNumber(1000000000000000000),
    value: new BigNumber(1)
  },
  rawTx: {
    from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
    gasLimit: new BigNumber(6000000),
    gasPrice: new BigNumber(1000000),
    nonce: 100,
    to: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
    value: new BigNumber(1000000)
  }
}

export const FAKE_TX_HASH =
  '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b'

export const FAKE_SIGNED_TX =
  '0xf86b028511cfc15d00825208940975ca9f986eee35f5cbba2d672ad9bc8d2a08448766c92c5cf830008026a0d2b0d401b543872d2a6a50de92455decbb868440321bf63a13b310c069e2ba5ba03c6d51bcb2e1653be86546b87f8a12ddb45b6d4e568420299b96f64c19701040'

export const FAKE_ACCOUNT = {
  address: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  wallet: TL_WALLET
}

export const FAKE_SIGNED_MSG_HASH = {
  concatSig: 'Fake concat signature',
  ecSignature: {
    r: '0x',
    s: '0x',
    v: 24
  }
}

export const FAKE_ENC_OBJECT = {
  asymAlg: 'Asym Algorithm',
  encryptedSymKey: 'Encrypted Symmetric Key',
  symAlg: 'Sym Algorithm',
  symEncMessage: 'Encrypted Message',
  symNonce: 'Sym Nonce',
  version: 1
}

export const FAKE_SEED =
  'mesh park casual casino sorry giraffe half shrug wool anger chef amateur'

export const FAKE_PRIVATE_KEY =
  '3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266'

export const FAKE_DECIMALS = {
  interestRateDecimals: 3,
  networkDecimals: 2
}

export const FAKE_TRANSFER_EVENT = {
  amount: '150',
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  networkAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  status: 'pending',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'Transfer',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_FORMATTED_TRANSFER_EVENT = {
  amount: {
    decimals: 2,
    raw: '123',
    value: '1.23'
  },
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  networkAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  status: 'pending',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'Transfer',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  extraData
}

export const FAKE_TRUSTLINE_UPDATE_REQUEST_EVENT = {
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  given: 100,
  interestRateGiven: 1,
  interestRateReceived: 1,
  networkAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  received: 200,
  status: 'pending',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'TrustlineUpdateRequest',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_TRUSTLINE_UPDATE_EVENT = {
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  given: 100,
  interestRateGiven: 1,
  interestRateReceived: 1,
  networkAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  received: 200,
  status: 'pending',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'TrustlineUpdate',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_TOKEN_EVENT = {
  amount: '150',
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  status: 'pending',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  tokenAddress: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'Transfer',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_FILL_EVENT = {
  blockNumber: 123,
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  exchangeAddress: '0xc7D6401b81A2F70C5906e8A6FBEbE680c69fA03D',
  filledMakerAmount: '150',
  filledTakerAmount: '150',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  makerTokenAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  status: 'pending',
  takerTokenAddress: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'LogFill',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_CANCEL_EVENT = {
  blockNumber: 123,
  cancelledMakerAmount: '150',
  cancelledTakerAmount: '150',
  counterParty: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  direction: 'sent',
  exchangeAddress: '0xc7D6401b81A2F70C5906e8A6FBEbE680c69fA03D',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  makerTokenAddress: '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18',
  status: 'pending',
  takerTokenAddress: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  timestamp: 123456789,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  transactionId:
    '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  type: 'LogCancel',
  user: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
}

export const FAKE_TX_INFOS = {
  balance: new BigNumber('2000000'),
  gasPrice: new BigNumber('2000000'),
  nonce: 12
}

export const FAKE_WEB3_TX_INFOS = {
  balance: new ethers.utils.BigNumber('2000000'),
  gasPrice: new ethers.utils.BigNumber('2000000'),
  nonce: 12
}

export const FAKE_META_TX = {
  data:
    '0x46432830000000000000000000000000000000000000000000000000000000000000000a',
  extraData: '0x',
  from: '0xF2E246BB76DF876Cef8b38ae84130F4F55De395b',
  nonce: '1',
  to: '0x51a240271AB8AB9f9a21C82d9a85396b704E164d',
  value: '0',
  delegationFees: '1',
  currencyNetworkOfFees: '0x51a240271AB8AB9f9a21C82d9a85396b704E164d'
}

export const FAKE_META_TX_PRIVATE_KEY =
  '0x0000000000000000000000000000000000000000000000000000000000000001'

// The signature on the FAKE_META_TX obtained in the tests of the trustlines-network/contracts repository
// Obtained by signing with key "0x0000...001"
export const FAKE_META_TX_SIGNATURE =
  '0x02a3c9abd0de925653c188b7f2e6e79ca032037371ef12a560116595508a51b65c1e4692878a87b491ef28e9ee560f7de0f2cb3f0981215134522750d42edce501'

export const FAKE_TRUSTLINE = {
  address: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  balance: '-100',
  given: '100',
  id: '123456798',
  interestRateGiven: '1',
  interestRateReceived: '1',
  isFrozen: false,
  leftGiven: '200',
  leftReceived: '0',
  received: '100'
}

export const FAKE_CLOSE_PATH_RAW = {
  feePayer: 'sender',
  fees: '1000000',
  path: ['0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'],
  value: '123'
}

export const FAKE_RELAY_API = 'http://relay.network/api/v1'

export const FAKE_SIGNED_MESSAGE =
  '0xea09d6e94e52b48489bd66754c9c02a772f029d4a2f136bba9917ab3042a0474301198d8c2afb71351753436b7e5a420745fed77b6c3089bbcca64113575ec3c1c'

export const FAKE_RAW_TX_OBJECT = {
  data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
  from: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  gasLimit: 10000,
  gasPrice: 10000,
  nonce: 5,
  to: '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA',
  value: 10000
}

export const FAKE_ETHERS_TX_RECEIPT = {
  byzantium: false
}

export const FAKE_ETHERS_TX_RESPONSE = {
  chainId: 69,
  confirmations: 1,
  data: '0xc0de',
  from: USER_2.address,
  gasLimit: ethers.utils.bigNumberify('1000000'),
  gasPrice: ethers.utils.bigNumberify('1000000'),
  hash: FAKE_TX_HASH,
  nonce: 12,
  raw: FAKE_SIGNED_TX,
  to: USER_1.address,
  value: ethers.utils.bigNumberify('10000000'),
  wait: (confirmations?: number) => Promise.resolve(FAKE_ETHERS_TX_RECEIPT)
}

export const ACCOUNT_KEYS = ['address', 'wallet']
export const TL_WALLET_KEYS = ['TLWalletVersion', 'walletType', 'meta']
export const ETHERS_WALLET_META_KEYS = ['walletFromEthers']
export const ENC_ETHERS_WALLET_META_KEYS = ['ethersKeystore']
export const IDENTITY_WALLET_META_KEYS = ['walletFromEthers', 'identityAddress']
export const ENC_IDENTITY_WALLET_META_KEYS = [
  'ethersKeystore',
  'identityAddress'
]
export const DEFAULT_PASSWORD = 'ts'
export const AMOUNT_KEYS = ['raw', 'value', 'decimals']
