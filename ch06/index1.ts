// export const createRangeIterable = (from: number, to: number) => {
//   let currentValue = from
//
//   return {
//     next() {
//       const value = currentValue < to ? currentValue++ : undefined
//       const done = value == undefined
//
//       return {value, done}
//     }
//   }
// }
//
// const iterator = createRangeIterable(1, 4) // 1부터 4까지 반복기
//
// while(true) {
//   const {value, done} = iterator.next()
//   if(done) break
//
//   console.log(value)
// }

////////////////////////////////////////////////////

// export class RangeIterable {
//   constructor(public from: number, public to: number) {}
//
//   [Symbol.iterator]() {
//     const that = this
//     let currentValue = that.from
//
//     return {
//       next() {
//         const value = currentValue < that.to ? currentValue++ : undefined
//         const done = value == undefined
//
//         return {value, done}
//       }
//     }
//   }
// }
//
// const iterator = new RangeIterable(1, 4)
//
// for(let value of iterator) {
//   console.log(value)
// }

////////////////////////////////////////////////////

export class StringIterable implements Iterable<string> {
  constructor(private strings: string[] = [], private currentIndex: number = 0) {}

  [Symbol.iterator](): Iterator<string> {
    const that = this
    let currentIndex = that.currentIndex
    let length = that.strings.length

    const iterator: Iterator<string> = {
      next(): {value: string, done: boolean} {
        const value = currentIndex < length ? that.strings[currentIndex++] : undefined
        const done = value == undefined

        return {value, done}
      }
    }
    return iterator
  }
}

for(let value of new StringIterable(['hello', 'world'])){
  console.log(value)
}

////////////////////////////////////////////////////

export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[] = [], private currentIndex: number = 0) {}

  [Symbol.iterator] = function* () {
    while(this.currentIndex < this.values.length)
      yield this.values[this.currentIndex++]
  }
}

for(let item of IterableUsingGenerator([1, 2, 3])) {
  console.log(item)
}

for(let item of IterableUsingGenerator(['hello', 'world'])) {
  console.log(item)
}
