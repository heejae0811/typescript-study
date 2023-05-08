let MAX_MAGE = 100

export function makeRandomNumber(max: number = MAX_MAGE): number {
  return Math.ceil((Math.random() * max))
}