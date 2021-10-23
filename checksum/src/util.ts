export function toDecimal(...[b7p, b6p, b5p, b4p, b3p, b2p, b1p, b0p]: [number, number, number, number, number, number, number, number]): string {
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

export function toHex (...bits: [number, number, number, number, number, number, number, number]): string {
    return parseInt(bits.join(''), 2).toString(16).toUpperCase();
}