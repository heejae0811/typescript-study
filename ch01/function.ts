function add1(num1: number, num2: number): number {
  return num1 + num2
}

function add2(num1: number, num2: number): void {
  console.log(num1 + num2)
}

function hello(name?: string) {
  return `Hello, ${name || 'world'}`
}

const result1 = hello()
const result2 = hello('heejae')
const result3 = hello(123)

// optional ?은 맨 뒤에 작성하기
function sayHello(name: string, age?: number): string {
  if(age !== undefined) {
    return `Hello, ${name}. You are ${age}.`
  } else {
    return `Hello, ${name}`
  }
}

console.log(sayHello())
console.log(sayHello('heejae'))
console.log(sayHello('heejae', 29))

function arrAdd(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0)
}

arrAdd(1, 2, 3)
arrAdd(1, 2, 3, 4, 5)