import { genCrc8Checksum } from '../src'

function text2Binary(value: string) {
    return value.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0')
    }).join(' ')
}

function binaryToText(bin: string) {
    // Convert the binary into an array of binary strings separated by whitespace.
     const binary = bin.split(' ')
    // Convert from binary to decimals, then to characters. 
    return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("")
}

describe ('Generate CRC8 Checksum', () => {
    test('Test "hello world" error', () => {
        const text = 'hello world'
        const input = text2Binary(text)
        const error = input.replace('1', '0') // Change first "1" bit to "0"

        const checksum = genCrc8Checksum(input)
        const errChecksum = genCrc8Checksum(error)

        expect(checksum).not.toEqual(errChecksum)
    })

    test('Test "ahoy world" error', () => {
        const text = 'ahoy world'
        const input = text2Binary(text)
        const error = input.replace('1', '0') // Change first "1" bit to "0"

        const checksum = genCrc8Checksum(input)
        const errChecksum = genCrc8Checksum(error)

        expect(checksum).not.toEqual(errChecksum)
    })

    test('Test "ahem world" error', () => {
        const text = 'ahem world'
        const input = text2Binary(text)
        const error = input.replace('1', '0') // Change first "1" bit to "0"

        const checksum = genCrc8Checksum(input)
        const errChecksum = genCrc8Checksum(error)

        expect(checksum).not.toEqual(errChecksum)
    })

    test('Test "okay world" without error', () => {
        const text = 'okay world'
        const input = text2Binary(text)

        const checksum = genCrc8Checksum(input)

        expect(checksum).toHaveLength(2)
    })

    test('Test "hello provo" without error', () => {
        const text = 'okay world'
        const input = text2Binary(text)

        const checksum = genCrc8Checksum(input)

        expect(checksum).toHaveLength(2)
    })

    test('Test 32-byte data stream with at least one error', () => {
        const text = 'Lorem ipsum dolor sit amet, cons'
        const input = text2Binary(text)
        const error = input.replace('1', '0') // Change first "1" bit to "0"

        const checksum = genCrc8Checksum(input)
        const errChecksum = genCrc8Checksum(error)

        expect(input.split(' ').length).toEqual(32) // Split input into byte chunks
        expect(checksum).not.toEqual(errChecksum)
    })
})