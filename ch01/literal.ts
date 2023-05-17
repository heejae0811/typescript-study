const userName1 = 'heejae'
let userName2 = 'leeheejae'

userName1 = 1
userName2 = 1

/////////////////////////////////////////////////

type Job = "teacher" | "student"

interface User {
  name: string
  job: Job
}

interface HighSchool {
  name: string | number
  grade: 1 | 2 | 3
}

const user:User = {
  name: 'HeeJae',
  job: 'teacher' // teacher 또는 student만 가능
}

const highSchoolStudent1:HighSchool = {
  name: 'HeeJae',
  grade: 1
}

const highSchoolStudent2:HighSchool = {
  name: 123,
  grade: 100
}

/////////////////////////////////////////////////

interface Pc {
  name: 'Pc'
  startPc(): void
}

interface Mobile {
  name: 'Mobile'
  startMobile(): void
}

function device(list: Pc | Mobile) {
  if(list.name === 'Pc') {
    list.startPc()
  } else {
    list.startMobile()
  }
}