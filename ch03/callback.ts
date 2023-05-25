export const init = (callback: () => void): void => {
  console.log('first message')
  callback()
  console.log('second message')
}

init(() => console.log('function message'))

///////////////////////////////

const calc = (num1: number, num2: (result: number) => void): void => {
  let add = (a: number, b: number) => a + b

  function multiply(a: number, b: number) {return a * b}
  let result = multiply(add(1, 2), num1)

  num2(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))

///////////////////////////////

const add = (a: number): (b: number) => number => (b: number): number => a + b
const result = add(10)(20)

console.log(result)

function multiply(a: number, b: number): number {
  function add(a: number, b: number) {
    return a + b
  }

  return add(1, 2)
}

multiply(10, 20)




