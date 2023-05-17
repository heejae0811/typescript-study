const User = function(name, age) {
  this.name = name
  this.age
}

User.prototype.showName = function(){
  console.log(this.name)
}

const mike = new User('mike', 30)

class User2 {
  // 객체를 만들어주는 생성자 메소드
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  showName() {
    console.log(this.name)
  }
}

const tom = new User2('Tom', 19)

// extends 상속
class Car {
  constructor(color) {
    this.color = color
    this.whells = 4
  }
  drive(){
    console.log('drive')
  }
  stop(){
    console.log('stop')
  }
}

class Bmw extends Car {
  // 자식 생성자는 반드시 부모 생성자를 호출해야 한다.
  constructor(){
    super() // 부모의 constructor을 사용하기 위해 super 키워드가 필요
    this.navigation = 1
  }
  park(){
    console.log('park')
  }
  // 동일한 이름의 메소드를 사용하게 되면 덮어쓰기 된다.
  // super
  stop(){
    super.stop() // 메소드 오버라이딩
    console.log('off')
  }
}

const z4 = new Bmw('blue')