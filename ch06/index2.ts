let count = 0

console.log('program started.')

const id = setInterval(() => {
  if(count >= 3) {
    clearInterval(id)
    console.log('program finished.')
  } else {
    console.log(count++)
  }
}, 1000)