/*
* public: 자식 클래스, 클래스 인스턴스 모두 접근 가능, 아무것도 작성하지 않으면 public으로 간주
* protected: 자식 클래스에서 접근 가능
* private: 해당 클래스 내부에서만 접근 가능, #변수명으로 작성할 수 있다.
* */


// 추상 클래스: 프로퍼티나 메소드의 이름만 선언해주고, 구체적인 기능은 상속받는 쪽에서 작성할 때 사용
abstract class Car {

}

class Bmw extends Car {

}