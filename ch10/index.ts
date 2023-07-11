// 특별히 자신을 상속하는 타입이 포함되어 있지 않은 일반 타입
interface IValueProvider<T> {
    value(): T
}

// add 메서드가 내가 아닌 나를 상속하는 타입을 반환하는 F-바운드 타입
interface IAddable<T> {
    add(value: T): this
}

// 메서드의 반환 타입이 this 이므로 F-바운드 타입
interface IMultiplyable<T> {
    multiply(value: T): this
}

class Calculator implements IValueProvider<number>, IAddable<number>, IMultiplyable<number> {
    constructor(private _value: number = 0) {
    }

    value(): number {
        return this._value;
    }

    // 클래스의 this 를 반환 (메서드 체인 기능을 구현하기 위함)
    add(value: number): this {
        this._value = this._value + value;
        return this;
    }

    multiply(value: number): this {
        this._value = this._value * value;
        return this;
    }
}

const value = (new Calculator(1))
    .add(2) // 3
    .add(3) // 6
    .multiply(4) // 24
    .value()

console.log(value) // 24

