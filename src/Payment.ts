import { Event } from './Event'
import { Utils } from './Utils'
import { User } from './User'
import { Transaction } from './Transaction'
import { CurrencyNetwork } from './CurrencyNetwork'

export class Payment {

  private validParameters = [ 'fromBlock', 'toBlock' ]

  constructor (private event: Event,
               private user: User,
               private utils: Utils,
               private transaction: Transaction,
               private currencyNetwork: CurrencyNetwork) {
  }

  public prepare (networkAddress: string, receiver: string, value: number, pathOptions: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getPath(networkAddress, this.user.address, receiver, value, pathOptions)
        .then(response => {
          if (response.path.length > 0) {
            this.transaction.prepFuncTx(
              this.user.address,
              networkAddress,
              'CurrencyNetwork',
              'transfer',
              [ receiver, value, response.maxFee, response.path.slice(1) ]
            ).then(tx => {
              resolve({
                rawTx: tx.rawTx,
                ethFee: tx.gasPrice * response.estimatedGas,
                maxFee: response.fees,
                path: response.path
              })
            })
          } else {
            reject('Could not find a path with enough capacity')
          }
        })
        .catch(error => {
          reject(`There was an error while finding a path: ${error}`)
        })
    })
  }

  public getPath (
    network: string,
    accountA: string,
    accountB: string,
    value: number,
    decimals: any = {},
    pathOptions?: any
  ): Promise<any> {
    const { utils, currencyNetwork } = this
    const url = `networks/${network}/path-info`
    if (typeof decimals === 'object') {
      pathOptions = decimals
    }
    return currencyNetwork.getDecimals(network, decimals)
      .then(dec => {
        const { maxFees, maxHops } = pathOptions
        const data = {
          from: accountA,
          to: accountB,
          value: utils.calcRaw(value, dec)
        }
        if (maxFees) {
          data['maxFees'] = maxFees
        }
        if (maxHops) {
          data['maxHops'] = maxHops
        }
        return utils.fetchUrl(url, {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(data)
        })
        .then(({ estimatedGas, fees, path }) => ({
          estimatedGas,
          path,
          maxFees: utils.calcValue(fees, dec)
        }))
      })
  }

  public get (network: string, filter?: object): Promise<Array<any>> {
    const mergedFilter = Object.assign({ type: 'Transfer' }, filter)
    return this.event.get(network, mergedFilter)
  }

  public confirm (rawTx): Promise<string> {
    return this.user.signTx(rawTx).then(signedTx => this.transaction.relayTx(signedTx))
  }

  public createRequest (network: string, amount: number, subject: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const params = [ network, this.user.address, amount, subject ]
      resolve(this.utils.createLink('paymentrequest', params))
    })
  }

  public issueCheque (network: string,
                      value: number,
                      expiresOn: number,
                      to: string // TODO receiver address optional?
  ): Promise<any> {
    const msg = this.user.address + to + value + expiresOn
    return this.user.signMsg(msg).then(signature => {
      const params = [ network, value, expiresOn, signature ]
      if (to) { params.push(to) }
      return this.utils.createLink('cheque', params)
    })
  }

  public prepCashCheque (network: string,
                         value: number,
                         expiresOn: number,
                         to: string,
                         signature: string): Promise<any> {
    return this.transaction.prepFuncTx(
      this.user.address,
      network,
      'CurrencyNetwork',
      'cashCheque',
      [ this.user.address, to, value, expiresOn, signature ]
    )
  }

  public confirmCashCheque (rawTx: any): Promise<string> {
    return this.user.signTx(rawTx).then(signedTx => this.transaction.relayTx(signedTx))
  }

  public getCashedCheques (network: string, filter?: object): Promise<any> {
    const mergedFilter = Object.assign({ type: 'ChequeCashed' }, filter)
    return this.event.get(network, mergedFilter)
      .then(transfers =>
        transfers.map(t =>
          Object.assign({}, { blockNumber: t.blockNumber }, t.event)))
      .catch(error => {
        return Promise.reject(error)
      })
  }

}
