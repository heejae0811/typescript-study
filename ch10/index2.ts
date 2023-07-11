
// 제네릭 인터페이스
interface IValueable<T> {
    value: T
}

// 제네릭 함수 - 화살표 함수
const fn1 = <T>(a: T): void => {}
const fn2 = <T, Q>(a: T, b: Q): void => {}

// 제네릭 타입 별칭
type Type1Func<T> = (T) => void;
type Type2Func<T, Q> = (T, Q) => void;
type Type3Func<T, Q, R> = (T, Q) => R;