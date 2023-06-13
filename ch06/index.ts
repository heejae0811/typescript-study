function* getPage(pageSize: number = 1, list: number[]) {
  let output = []
  let index = 0

  while (index < list.length) {
    output = []

    for (let i = index; i < index + pageSize; i++) {
      if (list[i]) {
        output.push(list[i])
      }
    }

    yield output
    index += pageSize
  }
}

let page = getPage(3, [1, 2, 3, 4, 5, 6, 7, 8])

// console.log(page.next())
// console.log(page.next())
// console.log(page.next())
// console.log(page.next())

/////////////////////////////////////////////

export function* generator() {
  console.log('generator started.')

  let value = 1

  while(value < 4)
    yield value++

  console.log('generator fininsed.')
}

for(let value of generator())
  console.log(value)
