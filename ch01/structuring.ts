// 구조화
export interface IPerson {
  name: string
  age: number
}

export interface ICompany {
  name: string
  age: number
}

let jack:IPerson = {
  name: 'Jack',
  age: 29
}

let naver:ICompany = {
  name: 'Naver',
  age: 10
}

console.log(jack)
console.log(naver)

///////////////////////////////////////////////////////

// 비구조화
let jack_name = jack.name
let jack_age = jack.age

console.log(jack_name, jack_age)

let {name, age} = naver

console.log(name, age)