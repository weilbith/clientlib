import { expect } from 'chai'
import 'mocha'
import { decode, encode } from '../../src/extraData'

describe('unit', () => {
  describe('extraData', () => {
    it('should encode and decode paymentRequestId correctly', () => {
      const extraData = { paymentRequestId: '0x1234567890abcdef' }
      expect(extraData.paymentRequestId).to.be.deep.eq(
        decode(encode(extraData)).paymentRequestId
      )
    })

    it('should encode and decode messageId correctly', () => {
      const extraData = { messageId: '0x1234567890abcdef' }
      expect(extraData.messageId).to.be.deep.eq(
        decode(encode(extraData)).messageId
      )
    })

    it('should encode and decode combined extra data correctly', () => {
      const extraData = {
        paymentRequestId: '0x1212343456567878',
        messageId: '0x1234567890abcdef'
      }
      expect(extraData).to.be.deep.eq(decode(encode(extraData)))
    })

    it('should not get an error when decoding wrongly formed extra data', () => {
      const encodedExtraData = '0x544c4d501' + '12345678'.repeat(10)
      const decoded = decode(encodedExtraData)
      expect(decoded).to.equal(null)
    })
  })
})
