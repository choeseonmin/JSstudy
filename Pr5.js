// 비교 연산자
// <, >, <=, >=, ==, != 가 있다
// 반환 값은 항상 boolean으로 출력

console.log(10 > 5); // 10은 5보다 크기 때문에 true
console.log(10 == 5); // 10은 5랑 같지 않기 때문에 false
console.log(10 != 5); // 10은 5랑 다르기 때문에 true

//동등 연산자

const a = 1;
const b = "1";
console.log(a == b) // ==를 동등 연산자라고 하는데 문자형이 a,b 서로 다르지만 true로 출력한다.
console.log(a === b) // ===는 일치연산자라고 하는데 이 처럼 문자형이 서로 다른 경우 비교할 때는 일치연산자를 사용한다.

// 조건문

const age = 16

if(age > 19){
    console.log('환영합니다.');
}
else if(age === 16){
    console.log('졸업 축하합니다.');
}
else {
    console.log('안녕히가세요.');
}