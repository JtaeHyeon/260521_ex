// 변수: 특정한 메모리에 저장되어 있는 값을 호출하기 위해서 사용하는 호칭
name = "아크원정대" // "": 문자열(텍스트)을 표현하기 위한 문법
console.log(name);

//let 키워드
let foo; // let 변수명 -> 변수명으로 메모리에 공간을 만들겠다. (선언, declaration)

foo = 1; // = : 대입, 할당, 등호, assignment / 정의:definition

let bar = 10; // 선언과 동시에 할당 -> 초기화(initialization)

console.log(foo);
console.log(bar);

//let -> 재할당 가능, 재선언 불가
//foo = 100 가능. 하지만 let foo는 불가 (Cannot redeclare block-scoped variable)

let baz; // 선언은 안하고 할당만 하면 에러남.(undefined)

// const a; // const는 선언과 할당을 동시에 해야함
const a = 111;
console.log(a);
// const a = 123; //재선언, 재할당 안됨
//변수는 재할당을 받을 수 있기 때문에 메모리상 가변적인 위치를 받음
// 상수는 재할당이 안되기 때문에 메모리상 고정적인 길이. -> 약간의 최적화 기능도 한다
// mutable, immutable...

// var
// v = 1000;
// var v = 100;
// var v;