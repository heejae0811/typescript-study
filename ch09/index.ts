import * as R from 'ramda'


const array = [1, 2, 3]

console.log(R.reduce((acc, cur) => acc + cur, array))
