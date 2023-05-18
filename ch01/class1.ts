import {IPerson, ICompany} from "./structuring";

let jack: IPerson = {
  name: 'jack',
  age: 20
}

let apple: ICompany = {
  name: 'apple',
  age: 43
}

let jack_name = jack.name
let apple_name = apple.name

let {name, age} = jack

console.log(jack)
console.log(apple)

console.log(jack_name)
console.log(apple_name)

console.log(name, age)