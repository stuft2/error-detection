import chunk from 'lodash.chunk'

export function genCrc8Checksum (data: string): string {
    const bits = data.split(/\s?/).map(char => parseInt(char))

    let b0p = 0,
    b1p = 0,
    b2p = 0,
    b3p = 0,
    b4p = 0,
    b5p = 0,
    b6p = 0,
    b7p = 0

    let b0n = 0,
    b1n = 0,
    b2n = 0,
    b3n = 0,
    b4n = 0,
    b5n = 0,
    b6n = 0,
    b7n = 0

    bits.forEach((bit, i) => {
        // Determine next state assignments
        b0n = bit
        b1n = b0p
        b2n = b1p ^ b7p
        b3n = b2p ^ b7p
        b4n = b3p ^ b7p
        b5n = b4p
        b6n = b5p
        b7n = b6p

        // Move next states into present states
        b0p = b0n
        b1p = b1n
        b2p = b2n
        b3p = b3n
        b4p = b4n
        b5p = b5n
        b6p = b6n
        b7p = b7n
    })

    return toHex(b7p, b6p, b5p, b4p, b3p, b2p, b1p, b0p)
}

function toDecimal(...[b7p, b6p, b5p, b4p, b3p, b2p, b1p, b0p]: [number, number, number, number, number, number, number, number]): string {
    let dec = 0
    if (b7p === 1) dec += 128
    if (b6p === 1) dec += 64
    if (b5p === 1) dec += 32
    if (b4p === 1) dec += 16
    if (b3p === 1) dec += 8
    if (b2p === 1) dec += 4
    if (b1p === 1) dec += 2
    if (b0p === 1) dec += 1
    return dec.toString()
}

function toHex (...bits: [number, number, number, number, number, number, number, number]): string {
    return parseInt(bits.join(''), 2).toString(16).toUpperCase();
}