export function genOddParity (x: number): number {
    x ^= x>>>16
    x ^= x>>>8
    x ^= x>>>4
    x &= 0xF
    return (0x6996>>>x) & 1
}

export function verify (data: number, expectParity: number): boolean {
    return genOddParity(data) === expectParity
}