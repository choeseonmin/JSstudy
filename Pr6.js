// 논리 연산자

// || (or) 여러 개 중 하나라도 true 면 true, 모든 값이 false면 false
// && (and) 모든 값이 true면 true, 하나라도 false면 false
// ! (not) true면 false, false면 true

// 스티븐 잡스는 한국인 이거나 남자이다. true (이거나 = or, 한국인은 아니지만 남자이기 때문에)
// 스티븐 잡스는 한국인 이고 남자이다. false (이고 = and, 한국인이고 남자여야 true)
// or는 첫 번째 true를 발견하는 즉시 평가를 멈춘다. 첫 true를 발견하는 즉시 뒤에 값은 더 이상 필요가 없기 때문에
// and는 or와 반대로 false를 발견하는 즉시 평가를 멈춘다. false를 발견하면 더 이상 true는 반환할 수 없기 때문에

const name = "선민";
const age = 30;

// or 예제
if(name === "승은" || age > 19) {
    console.log("합격")
}
else{
    console.log("불합격")
}
// ------------------------------------------

// and 예제
if(name === "승은" && age > 19) {
    console.log("합격")
}
else{
    console.log("불합격")
}

// age가 30이니까 isAdult가 성립이 됨. 그러니까 log에는 성립이 안됐을 때 '돌아가'가 나와야하는데 성립이 되니까 '환영합니다' 출력.
const isAdult = age > 19;
if (!isAdult) {
    console.log("돌아가")
}
else {
    console.log("환영합니다")
}

우선순위
and가 or보다 높다.
잘 이해는 안되지만, and와 or가 같이 있는 연산식이면 or로 인해 true가 하나라도 찾아지면 and 연산값과는 상관없이 true 반환하고 연산식 종료

const gender = 'female';
const name = '승은';
const isAdult = true;

if (gender === 'male' && name === '선민' || isAdult) {
    console.log('통과')
} else {
    console.log('불합격')
}