function* gen12() {
  yield 1
  yield 2
}

function* gen12345() {
  yield* gen12()
  yield* [3, 4]
  yield 5
}

for(let value of gen12345()){
  console.log(value)
}

//////////////////////////////////

function* gen(){
  let count = 3
  let select = 0

  while(count--){
    select = yield `select ${select}`
  }
}

const random = (max, min = 0) => Math.trunc(Math.random() * (max - min))

const iter = gen()

while(true){
  const {value, done} = iter.next(random(10, 1))

  if(done) {
    break
  } else {
    console.log(value)
  }
}
