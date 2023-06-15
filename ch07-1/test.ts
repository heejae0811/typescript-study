import { readFileSync, readFile } from "fs";

// 동기 방식
console.log('동기 방식 API')

const buffer: Buffer = readFileSync('./text.json')
console.log(buffer.toString())

// 비동기 방식
readFile('./text.json', (error: Error, buffer: Buffer) => {
  console.log(' 비동기 방식 API')
  console.log(buffer.toString())
})

const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if(error)
        reject(error)
      else
        resolve(buffer.toString())
    })
  });

  (async () => {
    const content = await readFilePromise('./text.json')
    console.log('Promise and async/await')
    console.log(content)
  })()
