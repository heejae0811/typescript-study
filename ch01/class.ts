class Person {
  name: string
  age?: number

  constructor(name: string, age?: number) {
    // @ts-ignore
    this.name = name
    this.age = age
  }
}

// @ts-ignore
let jack: Person = new Person()
jack.name = 'Jack'
jack.age = 32

console.log(jack)

/////////////////////////////////////////

// /*
// * public: 자식 클래스, 클래스 인스턴스 모두 접근 가능, 아무것도 작성하지 않으면 public으로 간주
// * protected: 자식 클래스에서 접근 가능
// * private: 해당 클래스 내부에서만 접근 가능, #변수명으로 작성할 수 있다.
// * */
class Car {
  public color: string
  // protected color: string
  // private color: string

  constructor(color: string) {
    this.color = color
  }
}

// @ts-ignore
let bmw: Car = new Car()
bmw.color = 'black'

console.log(bmw)

/////////////////////////////////////////

interface IUser {
  name: string
  age: number
}

class User implements IUser {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// @ts-ignore
let tom: IUser = new User('Tom')
console.log(tom)

/////////////////////////////////////////

// // static는 this가 아니라 클래스 이름을 붙인다.
//
// class Bmw extends Car {
//   constructor(color: string) {
//     super(color)
//   }
//   showName(){
//     console.log(super.name)
//   }
// }
//
// const z5 = new Bmw('block')
// console.log(z5.name)

/////////////////////////////////////////

// 추상 클래스: 프로퍼티나 메소드의 이름만 선언해주고, 구체적인 기능은 상속받는 쪽에서 작성할 때 사용
abstract class Car1 {
  color: string
  wheel: number

  constructor(color: string, wheel: number) {
    this.color = color
    this.wheel = wheel
  }

  abstract changeColor(color: string): string
  abstract wheelCount(wheel: number): number
}

class kia extends Car1 {
  constructor(color: string, wheel: number) {
    super(color, wheel)
  }

  changeColor(): string {
    return 'change color'
  }

  wheelCount(): number {
    return 4
  }
}

// const k3 = new Car1
const k5: kia = new kia('white', 4)
console.log(k5)
console.log(k5.changeColor())
console.log(k5.wheelCount())

/////////////////////////////////////////

class A {
  static first: number = 1
  second: number = 2
}

let first = A.first
let second = A.second

console.log(first)