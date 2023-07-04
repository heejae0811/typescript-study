function add(x: number): (y: number) => number {
    return function(y: number): number {
        // 클로저
        return x + y
    }
}

// 변수 x 메모리 유지
const add1 = add(10)
console.log(add1)

// result에 3을 저장 후 변수 x 메모리 해제
const result = add1(2)
console.log(result)