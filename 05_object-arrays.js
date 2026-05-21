// 배열, 객체
// -> for -> '배열' 전제 두지 않으면 뭘 할 수가 없음

const a1 = "사과";
const a2 = "배";
const a3 = "귤";
console.log(a1, a2, a3);

const fruits = ["사과", "배", "귤"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "포도";
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
// array/list -> collection의 길이. 가장 마지막에 위치하는 원소(element)의 인덱스는 length-1

//객체(Object)
const o = {
    키: "밸류", //특정 값/함수의 호출에 필요한 이름 - 값.
    // 값 -> 0, "",true 가능
    true: "",
    hello: "hello",
    1: 100,
    안녕: "안녕",
};
//네임스페이스 규약을 지킬경우(숫자로 시작하면 안되고, $_를 제외한 특수문자는 들어갈 수 없다.)
//네임 스페이스에 넣어도 되는 값은 이렇게 호출해도 된다.
console.log(o.키);
console.log(o.true);
console.log(o.hello);
console.log(o.안녕);

//값을 넣었다(공백을 포함 등등,,_
console.log(o[1]);
