// 반복문 loop
// 동일한 반복문을 여러번 반복할 수 있는 문법

//for문은 세미콜론으로 구분한다. 초기값, 조건식, 연산식 순서로 실행함 ex) for(let i = 0; i < 10; i++)

for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 0; i < 11; i++) {
    console.log(i)
}
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// while문은 while(조건) 동안 반복됨

let e = 0;
while(e<10){
    console.log(e)
    e++;
}

// do.. while문 do{}안은 무조건 실행함.

let f = 0;
do {
    f++;
}
while (f<10) {
    console.log(f)
}

// break, continue 이 두 가지는 반복문을 제어하는 문법
// break는 만나는 순간 즉시 코드를 멈추고 해당 반복문을 빠져나옴
// continue는 만나면 멈추고 다음 반복문으로 진행함

while(true) {
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}
// while의 조건을 true로 설정하면 무한루프가 됨
// confirm을 사용했기 때문에 취소, 확인 버튼이 나오는데 취소를 취소버튼을 누르면 break를 사용하여 confirm 창이 사라짐

for(let z = 0; z < 10; z++){
    if (z%2){
        continue;
    }
    console.log(z)
}

// 정확한 횟수가 정해져있으면 for, 그렇지 않으면 while을 사용함. do.. while은 거의 사용하지 않음