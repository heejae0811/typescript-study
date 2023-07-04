export const compose = <T, R>(...functions: readonly Function[]): Function => (x: any): (T: any) => R => {
  const deepCopiedFunctions = [...functions]
  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

const inc = (x: number): number => x + 1
const composed = compose(inc, inc, inc)

console.log(composed(1)) // 4