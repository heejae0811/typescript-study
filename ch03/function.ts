const add1 = (a: number, b: number): number => {return a + b}
const add2 = (a: number, b: number): number => a + b

console.log(add1(1, 2))
console.log(add2(1, 2))

function f() {
  let x = 1
  return x
}

function g() {
  let x = 2
  return x
}
console.log(f())
console.log(g())

// console.log(x)

const isGreater = (a: number, b: number): boolean => {
  return a > b
}

console.log(isGreater(1, 2))

function isGreater1(a: number, b: number): boolean {
  return a > b
}