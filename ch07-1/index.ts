const test = async () => {
  const value = await Promise.resolve(1)
  console.log(value)
}

// test()

//////////////////////////////////////////////

export const test1 = async () => {
  let value = await 1
  console.log(value)

  value = await Promise.resolve(1)
  console.log(value)
}

export async function test2() {
  let value = await 'hello'
  console.log(value)

  value = await Promise.resolve('hello')
  console.log(value)
}

// test1()
// test2()

// test1().then(() => test2())

//////////////////////////////////////////////

const asyncReturn = async() => {
  return [1, 2, 3]
}

// asyncReturn().then(value => console.log(value))

//////////////////////////////////////////////

const asyncExpection = async() => {
  throw new Error('error1')
}

// asyncExpection().catch(err => console.log(err.message))

const awaitReject = async() => {
  await Promise.reject(new Error('error2'))
}

// awaitReject().catch(err => console.log(err.message))

//////////////////////////////////////////////

import {readFile} from "fs";

export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((
    resolve: (value: string) => void,

    reject: (error: Error) => void) => {
    readFile(filename, (err: Error, buffer: Buffer) => {
      if (err) reject(err)
      else resolve(buffer.toString())
    })
  })

const readFileAll = async(filenames: string[]) => {
  return await Promise.all(filenames.map(filename => readFilePromise(filename)))
}

readFileAll(['./text.json', './text1.json'])
  .then(([text, text1]: string[]) => {
    console.log('text', text)
    console.log('text1', text1)
  })

  .catch(err => console.log(err.message))









