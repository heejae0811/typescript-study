// 잔여 연산자
let address:any = {
  country: '대한민국',
  city: '서울',
  address1: '양천구',
  address2: '목동서로',
  address3: '221'
}

const {country, city, ...detail} = address

console.log(country)
console.log(city)
console.log(detail)

///////////////////////////////////////////////////////

// 전개 연산자
// @ts-ignore
let name = {name: 'Jack'}
let age = {age: 30}

// @ts-ignore
const userInfo = {...name, ...age}

console.log(userInfo)