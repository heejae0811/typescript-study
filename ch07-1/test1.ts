import { readFile } from "fs";

readFile('./text.json', (err: Error, buffer: Buffer) => {
  if(err) throw err
  else {
    const content: string = buffer.toString()
    console.log(content)
  }

  readFile('./text1.json', (err: Error, buffer: Buffer) => {
    if(err) throw err
    else {
      const content: string = buffer.toString()
      console.log(content)
    }
  })
})