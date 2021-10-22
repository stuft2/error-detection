import { genCrc8Checksum } from '../src'

function text2Binary(value: string) {
    return value.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function binaryToText(bin: string) {
    //Convert the binary into an array of binary strings separated by whitespace.
     const binary = bin.split(' ');
    //convert from binary to decimals, then to characters. 
    return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
    }

describe ('Generate CRC8 Checksum', () => {
    test('Test hello world error', () => {
        const text = 'hello world'
        const input = text2Binary(text)
        const error = input.replace('1', '0')

        console.log(binaryToText(input))
        console.log(binaryToText(error))

        const sequence = genCrc8Checksum(input)
        const errorSequence = genCrc8Checksum(error)

        console.log(sequence)
        console.log(errorSequence)

        expect(sequence).not.toEqual(errorSequence)
    })
})