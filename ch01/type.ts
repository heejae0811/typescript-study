let random:any = '램덤'

random = 100
random = true
random = null
random = undefined
random = [1, 2, 3]

let car:string = 'bmw'

let age:number = 29
age =  30
//age = '삼십'

let isAdult:boolean = true

let a:null = null

let b:undefined = undefined

let arr1:number[] = [1, 2, 3]
let arr2:Array<number> = [1, 2, 3]

let arr3:string[] = ['hello', 'world']
let arr4:Array<string> = ['hello', 'world']

// 튜플
let tuple:[string, number]
tuple = ['hello', 100]
tuple[0].toLowerCase()
// tuple = [10, 100]
// tuple[1].toLowerCase()

// void: 함수에서 아무것도 반환하지 않을 때 사용
function sayHello():void {
  console.log('hello')
}

// never: error를 반환하거나 영원히 끝나지 않는 함수일 때 사용
function infLoop():never {
  throw new Error()

  while(true) {

  }
}

// enum: 자바스크립트에는 없는 타입, 아무것도 정의하지 않으면 0부터 1씩 증가하면서 할당
enum Os1 {
  Window,
  Ios,
  Android
}

enum Os2 {
  Window = 5,
  Ios,
  Android
}

// 숫자가 아닐 때는 단방향 맵핑만 된다.
enum Os3 {
  Window = 'win',
  Ios = 'ios',
  Android = 'and'
}

console.log(Os1) // Window: 0, Ios: 1, Android: 2
console.log(Os2[5]) // Window
console.log(Os3.Window) // win

///////////////////////////////////////////////////////

let person:object = {name: 'Jack', age: 32};
//person.name
console.log((<{name: string}>person).name) // Jack

///////////////////////////////////////////////////////

// 타입 단언 <> as
export default interface INameable {
  name: string
}

let obj:object = {name: 'Jack'}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name

console.log(typeof obj, obj) // object { name: 'Jack' }
console.log(typeof name1, name1) // string Jack
console.log(typeof name2, name2) // string Jack