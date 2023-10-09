// 함수 표현식

// 자바스크립트는 인터프리터 언어로 코드가 위에서 부터 아래로 차례대로 코드를 실행 시킴
// 함수 선언식은 호이스팅이라는 내부 알고리즘에 의해 보이는 코드의 범위보다 더 넓은 범위에 코드가 사용이 가능하다.
// 범위가 넓다는 뜻이지 코드의 순서가 바뀐다는 건 아님.

// 함수 표현식은 해당 코드에 도달해야지 실행이 가능해짐.

// 더 자유롭고 편하게 코딩할 수 있는 건 함수 선언식

// 화살표 함수

//이 코드를 화살표 함수로 변경할 수 있음.
let add = function (num1, num2){
    return num1 + num2;
}

// 변경한 함수
let add = (num1, num2) => {
    return num1 + num2
}

// return을 없애기 위해선 {}을 ()로 변경하면 됨
let add = (num1, num2) => (
    num1 + num2;
)

// return문이 한 줄이라면 ()도 없앨 수 있음
let add = (num1, num2) => num1 + num2;

// 인수가 하나라면 괄호도 생략할 수 있음
let years = num => `I'm ${num} years old.`;

// 인수가 없는 함수라면 괄호를 없앨 수 없음
let showError = () => {
    alert('error!');
}

// return문 전에 코드가 한 줄이 아니라면 {} 사용해야함
let add = (num1, num2) => {
    const result = num1 + num2;
    result result;
}

// 예제
showError();

let showError = () => {
    console.log("error!");
}



