const name = "MIKE";
const age = 30;

const name1 = "MIKE"
const name2 = 'MIKE'
const name3 = `MIKE`

const message1 = "I have bf";
const message2 = 'I have bf';

const message3 = `I have bf  he's name is ${name}`;
console.log(message3);

// 빅팁은 문자안에 내용을 변수로 선언할 때 사용하는데 혹시나 빅팁을 사용하지 않고 ""을 사용하면 ${}는 동작하지 않고 문자열 그대로 출력함.
const message4 = "I have bf  he's name is ${name}";
console.log(message4)

console.log(1 + 2); // 더하기
console.log(5 - 2); // 빼기
console.log(4 * 2); // 곱하기
console.log(10 / 2); // 나누기, 나눠진 몫의 값
console.log(10 % 3); // 나누기, 나머지의 값

const x = 1/0;

console.log(x) // infinity 출력이 되는데 이건 무한이라는 뜻을 가짐

console.log(name/2); //NaN 가 출력 NaN은 Not a Number 숫자가 아니라는 뜻

const a = true;
const b = false;

console.log(name === 'MIKE')
console.log(age > 40)

let goal;
console.log(goal) // undefined가 출력되는데 출력될 값이 없다는 뜻을 의미함.

let user = null; // null은 존재하지 않는다고 생각하면 됨

//typeof 연산자는 변수의 자료형을 알 수 있다

console.log(typeof name)
console.log(typeof 3)
console.log(typeof true)
console.log(typeof "xxx")
console.log(typeof null)
console.log(typeof undefined)


const name = "MIKE";
const age = 27;

const a = "나는 ";
const b = " 입니다.";

console.log(a + name  + b);

console.log(a + age + "살" + b);






