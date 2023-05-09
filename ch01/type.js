var car = 'bmw';
var age = 29;
var isAdult = true;
var a = null;
var b = undefined;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ['hello', 'world'];
var arr4 = ['hello', 'world'];
// 튜플
var tuple;
tuple = ['hello', 100];
tuple[0].toLowerCase();
// tuple = [10, 100]
// tuple[1].toLowerCase()
// void: 함수에서 아무것도 반환하지 않을 때 사용
function sayHello() {
    console.log('hello');
}
// never: error를 반환하거나 영원히 끝나지 않는 함수일 때 사용
function infLoop() {
    throw new Error();
    while (true) {
    }
}
// enum: 자바스크립트에는 없는 타입, 아무것도 정의하지 않으면 0부터 1씩 증가하면서 할당
var Os1;
(function (Os1) {
    Os1[Os1["Window"] = 0] = "Window";
    Os1[Os1["Ios"] = 1] = "Ios";
    Os1[Os1["Android"] = 2] = "Android";
})(Os1 || (Os1 = {}));
var Os2;
(function (Os2) {
    Os2[Os2["Window"] = 5] = "Window";
    Os2[Os2["Ios"] = 6] = "Ios";
    Os2[Os2["Android"] = 7] = "Android";
})(Os2 || (Os2 = {}));
// 숫자가 아닐 때는 단방향 맵핑만 된다.
var Os3;
(function (Os3) {
    Os3["Window"] = "win";
    Os3["Ios"] = "ios";
    Os3["Android"] = "and";
})(Os3 || (Os3 = {}));
console.log(Os1);
console.log(Os2[5]);
console.log(Os3.Window);
