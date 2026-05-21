// JS -> 값을 분류. 적절한 대응 -> 타입(형) -> 자료형

const int = 1;
const int2 = -1;
const float = 1.01;

console.log(typeof int);
console.log(typeof int2);
console.log(typeof float);

// boolean
const t = true; // 예약어. 키워드 'true' 변수명 쓸 수 없음.
const f = false;

console.log(typeof t);
console.log(typeof f);

// string - 열
// 문자(1글자) -> 메모리. 메모리들을 연결시켜서 문자들의 집합/배열/나열 -> 문자배열(c) {'h', 'e', 'l', 'l', 'o'}
// 문자열(string) -> "hello"
// JavaScript = 'h', 'Hello', -> 'hello', "hello". 가능하면 ""로 혼란 피하라.

const str = "태현";
console.log(typeof str);

//null
const n = null;
console.log(typeof n); //object가 나오는 설계 미스,,

//undefined
let u;
console.log(typeof u);
let u2 = undefined;
console.log(typeof u2);
let u3 = {};
console.log(typeof u3.u);

//object
let o = {}; // 주소가 저장되는 타입
console.log(typeof o);

//템플릿 리터럴
const nn = "김자바";
console.log(nn + "는 개발자 이다");
console.log("대한민국에 사는 " + nn + "는 개발자 이다");
console.log(`${nn}는 개발자 이다`); //변수를 직접(문자열 연결 없이) 넣을 수 있다.
console.log(`
    시작
    
    엔터가 있으면
    그대로 읽음
(들여쓰기도 ㅎ)
    끝`); // ``은 엔터를 그대로 인식한다
