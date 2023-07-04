export const pipe = <T>(...functions: Function[]): Function => (x: T): T => {
  return functions.reduce((value, func) => func(value), x)
}

export const map = (f: any) => (a: any) => a.map(f)

const square = (value: number) => value * value
const squaredMap = map(square)
const fourSquare = pipe(squaredMap, squaredMap)

console.log(fourSquare([2, 3]))



// const add = (x: number) => (y: number) => x + y
// const inc = add(1)
//
// const result = pipe(inc, add(2))
//
// console.log(result(3))

// const inc = (x: number): number => x + 1
// const composed = pipe(inc, inc, inc)
//
// console.log(composed(1)) // 4