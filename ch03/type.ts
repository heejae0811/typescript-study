type User = {
  name: string
  age: number
}

let user1: User = {
  name: 'heejae',
  age: 29
}

// let user2: User = {
//   name: 'heejae'
// }

console.log(user1)

///////////////////////////////////

interface IUser {
  name: string
  age: number
}

let user3: IUser = {
  name: 'heejae',
  age: 29
}

// let user4: IUser = {
//   name: 'heejae'
// }

console.log(user3)

///////////////////////////////////

type stringNumberFunc = (arg1: string, arg2: number) => void

let f: stringNumberFunc = function(a: string, b: number): void {
  console.log(a, b)
}

f('heejae', 29)

///////////////////////////////////

interface INameable {
  name: string
}

function getName(userName: INameable) {
  return userName !== undefined ? userName.name : 'unknown name'
}

console.log(getName(undefined))
console.log(getName({name: 'heejae'}))

///////////////////////////////////

interface IAgeable {
  age?: number
}

function getAge(userAge: IAgeable) {
  return userAge !== undefined && userAge.age ? userAge.age : 'unknown age'
}

console.log(getAge(undefined!))
console.log(getAge({age: 29}))

///////////////////////////////////

function userList(name: string, age?: number) {
  console.log(`name: ${name}, age: ${age}`)
}

userList('Heejae', 29)
userList('Heejae')

///////////////////////////////////

// let add = new Function('a', 'b', 'return a + b')
// console.log(add(1, 2))

let add = function(a: number, b: number) { return a + b }
console.log(add(1, 2))