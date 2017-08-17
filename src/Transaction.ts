import { Utils } from './Utils'
import lightwallet from 'eth-lightwallet'
import * as ethUtils from 'ethereumjs-util'

declare let lightwallet: any
const CONTRACTS = require('../contracts.json')

export class Transaction {

  constructor (private utils: Utils) {
  }

  public prepFuncTx (
    userAddress: string,
    contractAddress: string,
    contractName: string,
    functionName: string,
    parameters: any[]
  ): Promise<any> {
    return this.getTxInfos(userAddress).then(txinfos => {
      const txOptions = {
        gasPrice: txinfos.gasPrice, // TODO let user set gas price
        gasLimit: 1000000, // TODO let user set gas limit
        value: 0,
        nonce: txinfos.nonce,
        to: contractAddress
      }
      const txObj = {
        rawTx: lightwallet.txutils.functionTx(CONTRACTS[contractName].abi, functionName, parameters, txOptions),
        ethFees: 200000 * txOptions.gasPrice // TODO set gas dynamically according to method
      }
      return txObj
    })
  }

  public prepValueTx (from: string, to: string, value: number): Promise<any> {
    return this.getTxInfos(from)
      .then(txinfos => {
        const txOptions = {
          gasPrice: txinfos.gasPrice, // TODO let user set gas price
          gasLimit: 1000000, // TODO let user set gas limit
          value,
          nonce: txinfos.nonce,
          to
        }
        return {
          rawTx: lightwallet.txutils.valueTx(txOptions),
          ethFees: 21000 * txOptions.gasPrice
        }
      })
  }

  public relayTx (rawTx: string): Promise<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({ rawTransaction: `0x${rawTx}` })
    }
    return this.utils.fetchUrl('relay', options).then(() => {
      return {
        txId: ethUtils.bufferToHex(ethUtils.rlphash(rawTx))
      }
    })
  }

  private getTxInfos (address: string): Promise<any> {
    return this.utils.fetchUrl(`txinfos/${address}`)
  }

  private handleError (error: any) {
    return Promise.reject(error.json().message || error)
  }
}
