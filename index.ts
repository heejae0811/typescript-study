let arr11: number[] = new Array

arr11.push(1)
arr11.push(2)
arr11.push(3)

console.log(arr11) // [1, 2, 3]

///////////////////////////////

// let str: string = 'hello'
// let str: string = 'hi'

///////////////////////////////

let original = 1
let copy = original

copy = copy + 2

console.log(original)
console.log(copy)

///////////////////////////////

let ori = [1, 2, 3]
let cop = ori

cop.push(4)

console.log(ori)
console.log(cop)

///////////////////////////////

let originArr = [1, 2, 3]
let copyArr = [...originArr]

copyArr.push(4)

console.log(originArr)
console.log(copyArr)

///////////////////////////////

let arr: number[] = [3, 5, 2, 1, 4]
let sortArr: number[] = arr.sort()

console.log(arr)
console.log(sortArr)

///////////////////////////////

let a: number[] = [3, 5, 2, 1, 4]
let s: number[] = [...a].sort()

console.log(a)
console.log(s)

///////////////////////////////

interface Data {
  id: number
  title: string
}

const data: Data[] = [
  { id: 1, title: '제목1' },
  { id: 2, title: '제목2' },
  { id: 3, title: '제목3' }
]

let filterData = data.filter((item, index) => item.id !== 1)

console.log(data)
console.log(filterData)

///////////////////////////////

const mergeArr = <T>(...arr: readonly T[][]): T[] => {
  let result: T[] = []

  for(let i = 0; i < arr.length; i++) {
    const array: T[] = arr[i]
    result = [...result, ...array]
  }

  return result
}

console.log(mergeArr(['hello', 'world']))
console.log(mergeArr([1, 2, 3]))
console.log(mergeArr([{name: '희재', age: 27}]))

///////////////////////////////

type tupleType = [number, string]

const tuple1: tupleType = [1, 'title1']

let [id, title] = tuple1
console.log(id, title) // 1, title1




