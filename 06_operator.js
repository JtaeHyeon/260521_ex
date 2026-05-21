// 연산자: 1개이상의 피 연산자를 대상으로 변환, 계산 -> 결과 값 도출

//산술연산자(+,-,*,/,%)

//숫자
console.log(30 + 7);
console.log(30 - 7);
console.log(30 * 7);
console.log(30 / 7); //소수점 연산까지 진행
console.log(30 % 7); //나머지 연산 -> 몫 말고 남은 나머지
//사칙연산 계산 우선순위를 따름(곱,나눗세 먼저 -> +,-)
console.log(30 - 5 * 3);
//()를 쓰면 우선순위를 지정할 수 있음
console.log((30 - 5) * 3);
//참고: 부동소수점(java때 설명할 것임)

//대입/할당 연산자 : 변수, 상수에 값을 넣음
let a = 0; // = <- 연산자
a = a + 5; //계산
// 왼쪽 변수 네임스페이스 = 새로운 값(기존 변수에 뭔가 계산한..)
console.log(a);
a += 10; //a=a+10
// + - * / 다 정상 작동함
// js 주요 연산자를 연습할 수 있는 연습문제를 답과 함께 10개씩 작성해줘 -> ....

//비교연산자
// ==
console.log("100 == 10", 100 == 10); //맞으면 true, 틀리면 false.
console.log("100 >= 10", 100 >= 10);
console.log("10 >= 10", 10 >= 10);
console.log("100 <= 10", 100 <= 10);
console.log("10 <= 10", 10 <= 10);
console.log("100 != 10", 100 != 10);
console.log(`"고양이" == "개"`, "고양이" == "개");
console.log(`"개" == "개"`, "개" == "개");
console.log(`"개" != "개"`, "개" != "개");
// "고양이" + "개" = "고양이개"
console.log(1 + "1");
//문자와 숫자가 만나면 둘 중 하나가 형 변환 -> +는 문자열의 연산이 있으니 숫자가 문자열로 바뀜
console.log(2 * "2"); //4
// + 를 제외한 나머지 연산들은 문자열 연산이 없으므로 숫자로 자동 변환

console.log(1 + "1" * 1); //곱하기 먼저 해서 숫자가 되므로 1+1 = 2가 됨.

console.log(1 == "1"); //true
//일치 연산자(형 변환을 하지 않는다 - 그대로 둔다)
console.log(1 === "1"); //false
console.log(1 !== "1"); //true

//truthy, falsy
console.log(0 == "0"); //true
console.log("" == 0); //true
console.log("" == "0"); //false

//논리연산자
//1개 이상의 값에 대해서 논리적 평가 갑(true, false)을 합성, 변환하는 연산자
// &&(and), ||(or), !(not)
console.log("-----------");
const b1 = 100 > 10;
console.log(b1);
console.log(!b1);
const b2 = 50 < 20;
console.log(b2);
// 모든 조건 만족 시 true -> &&(and)
console.log(b1 && b2);
// 조건 중 하나라도 true면 true -> ||(or)
console.log(b1 || b2);

// &&, || -> 단축연산 함.
// || : 처음 조건이 true -> 두번째꺼 안봄(어차피 true)
// && : 처음 조건이 false -> 두번째꺼 안봄(어차피 false)
//(증감 연산자로 증명할 것)


//삼항연산자
//조건 ? 조건이 참일 때 반환할 값 : 조건이 거짓일 때 반환할 값
console.log(b1 ? b1 : b2);
