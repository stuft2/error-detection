import {genOddParity, verify} from '../src'

describe('Generate parity', () => {
    test ('odd number of 1\'s', () => {
        expect(genOddParity(0b0010)).toEqual(1)
    })
    test ('even number of 1\'s', () => {
        expect(genOddParity(0b0011)).toEqual(0)
    })
})

describe('verify 1, 2, 3 bits of error', () => {
    const byte = 0b11111111
    const parity = genOddParity(byte)

    it ('should verify with 1 bit of error', () => {
        expect(verify(byte >>> 1, parity)).toEqual(false)
    })

    it ('should not verify with 2 bit of error', () => {
        expect(verify(byte >>> 2, parity)).toEqual(true)
    })

    it ('should verify with 3 bit of error', () => {
        expect(verify(byte >>> 3, parity)).toEqual(false)
    })
})
