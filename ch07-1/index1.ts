// Promise.resolve(1)
//   .then(value => console.log(value))
//
// Promise.resolve({name: 'Jack'})
//   .then(value => console.log(value))
//
// //////////////////////////////////////
//
// Promise.reject(new Error('에러 발생'))
//   .catch((err: Error) => console.log(err.message))

//////////////////////////////////////

// Promise.resolve(1)
//   .then((value: number) => {
//     console.log('1', value) // 1
//     return Promise.resolve(true)
//   })
//
//   .then((value: boolean) => {
//     console.log('2', value) // true
//     return [1, 2, 3]
//   })
//
//   .then((value: number[]) => {
//     console.log('3', value) // [1, 2, 3]
//     return {name: 'Jack'}
//   })

//////////////////////////////////////

const isAllTrue = (values: boolean[]) => values.every(value => value == true)

console.log(isAllTrue([true, true])) // true
console.log(isAllTrue([true, false])) // false

//////////////////////////////////////

const isAnyTrue = (values: boolean[]) => values.some(value => value == true)

console.log(isAnyTrue([true, false])) // true
console.log(isAnyTrue([false, false])) // false
