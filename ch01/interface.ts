let obj: object = {name: '이희재', age: 29}
obj = {first: 1, second: 2}

interface IPerson {
  name: string
  age: number
  isAdult?: boolean
  readonly birthYear: number
}

let person1: IPerson = {
  name: '이희재',
  age: 29,
  isAdult: true,
  birthYear: 1995
}

// let person2: IPerson = {
//   name: '이희재'
// }

// let person3: IPerson = {
//   name: '이희재',
//   age: 29,
//   birthYear: 1995,
//   number: '010-1111-1111'
// }

type Score = 'A' | 'B' | 'C' | 'F'

interface User {
  name: string
  age: number
  gender?: string // ?를 붙이면 있어도 되고, 없어도 된다.(선택 속성, optional)
  readonly birthYear: number
  [grade: number]: Score
}

let user: User = {
  name: 'heejae',
  age: 29,
  birthYear: 1995,
  1: 'A',
  2: 'B'
}

user.age = 27
user.gender = 'female'
// user.birthYear = 2000 // readonly여서 값을 바꾸려고 하면 에러가 나타난다.

let ai: {
  name: string
  age: number
  etc?: boolean
} = {name: 'Tom', age: 20}

console.log(ai)



// 인터페이스로 함수도 정의할 수 있다.
interface Add {
  (num1: number, num2: number): number
}
const function_add: Add = function(x, y) {
  return x + y
}

interface IsAdult {
  (age: number):boolean
}

const a:IsAdult = (age) => {
  return age > 19
}

// 인터페이스로 클래스도 정의할 수 있다.
interface Car {
  color: string
  wheels: number
  start(): void
}

// Bmw는 Car의 속성을 상속받는다.
// class Bmw implements Car {
//   color
//   wheels = 4
//   start() {
//     console.log('go..')
//   }
// }
//
// interface Toy {
//   name: string
// }
//
// // 인터페이스는 확장이 가능한다. (기존 속성에 추가로 속성을 작성할 수 있다.)
// interface ToyCar extends Car, Toy {
//   price: number
// }