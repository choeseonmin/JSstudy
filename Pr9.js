// 함수

// function sayHello(name) {
//     console.log(`hello, ${name}`);
// }

// 순서대로 function 함수명 (매개변수) 라고 칭함.
// 매개변수는 인수라고도 한다. 매개변수는 없을 수도 있고, 1개 혹은 1개 이상일 수도 있음.
// {} 내부는 함수의 실행코드를 작성함.


// 매개변수가 없는 함수
function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세요.')
}

showError();
// showError안에 내가 스스로 공식을 생성한다. 그리고 생성한 함수를 길게 적을 필요 없이 함수명으로 실행한다.
// 매번 길게 입력할 필요 없이 코드를 작성할 수 있다.
// 유지보수가 쉽다. 예를 들면 기획자가 showError의 경고문을 변경해달라 했을 때 변경하기 쉽다.

// 매개변수가 있는 함수
function Hello(name){
    const msg = `hello, ${name}`;
    console.log(msg);
}

Hello('선민');
Hello('승은');
Hello('주은');

function Hello(name){
    let msg = 'Hello';
    if(name) {
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}

Hello();

function Hello(name){
    let msg = 'Hello';
    if(name) {
        msg += ', ' + name;
    }
    console.log(msg);
}

Hello();
Hello('선민');


let msg = 'Hello';
console.log('함수 호출 전')
console.log(msg)
function Hello(name){
    if(name) {
        msg += `, ${name}`;
    }
    console.log('함수 내부')
    console.log(msg);
}

Hello('선민');
console.log('함수 호출 후')
console.log(msg)

// 전역 변수와 지역 변수

let msg = "welcome";
console.log(msg)

function Min(name){
    let msg = "Hello"
    console.log(msg + ' ' + name);
}

Min("선민");
console.log(msg)

// ---------------------------------

let name = "선민"

function Hello(name){
    console.log(name)
}
Hello();

// 서버에서 공통으로 쓰는 변수가 아닌 이상은 지역 번수로 선언을 해서 사용하는 것을 추천함.

function  Hello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName }`
    console.log(msg)
}

Hello();
Hello('선민');

// newName 변수의 의미가 name이 아니면 'friend' 출력한다고 생각하면 됨, friend는 true기 때문에
// 좀 더 쉽게 생각하려면, Hello(); 코드안이 공백이기 때문에 자연스럽게  friend가 출력됐다고 생각하면 됨
// Hello('선민')은 값이 입력이 돼서 공백이 아니기 때문에 "Hello, 선민"이 출력 되는 것임.


function  Hello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
}

Hello();
Hello('선민');

// 위에 있는 코드와 같은 값이 출력되지만, 조금 다른 점은 hello를 선언할 때 애초에 default 값으로 friend를 넣어놨기 때문에
// 위에서 적었던 newname 변수는 필요가 없음

// return 으로 값 반환

function add(num1, num2) {
    return num1 + num2;
}

const result = add(2,3);
console.log(result)

//return()은 ()안에 있는 값을 실행하고 작업을 종료한다고 생각하면 됨 한 개의{}안에 return 밑에 있는 코드는 더 이상 실행되지 않음

//주의사항
// 함수는 한번에 한 작업만 하는게 좋음, 여러 작업을 할 때엔 여러 함수로 잘개 쪼개서 사용하는 것이 좋다.
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍 ex) showError,getName, createUserDate, checkLogin 같이 어떤 동작을 할 것인지 예상되게끔 하는 것이 좋다.