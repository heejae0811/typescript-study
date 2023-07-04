// function g1<T>(a: T): void {}
// function g2<T, Q>(a: T, b: Q): void {}
//
// const g3 = <T>(a: T): void => {}
// const g4 = <T, Q>(a: T, b: Q): void => {}
//
// type Type1Func<T> = (T) => void
// type Type2Func<T, Q> = (T, Q) => void
// type Type3Func<T, Q, R> = (T, Q) => R
//
// type MapFunc<T, R> = (T) => R
// type IdentityFunc<T> = MapFunc<T, T>
//
// const numberIdentity: IdentityFunc<number> = (x: number): number => x
// const stringIdentity: IdentityFunc<string> = (x: string): string => x
// const objectIdentity: IdentityFunc<object> = (x: object): object => x
// const arrayIdentity: IdentityFunc<any[]> = (x: any[]): any[] => x
//
// export type FirstFunc<T, R> = (T) => R
// export type SecondFunc<T, R> = (T) => FirstFunc<T, R>
// export type ThirdFunc<T, R> = (T) => SecondFunc<T, R>

function add(x: number): (y: number) => number {
  return function(y: number): number {
    // 클로저
    return x + y
  }
}

// 변수 x 메모리 유지
const add1 = add(1)
console.log(add1)

// result에 3을 저장 후 변수 x 메모리 해제
const result = add1(2)
console.log(result)

