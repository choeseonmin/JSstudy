// switch
// 사실상 if문을 이해하고 잘 사용하면 switch문은 잘 쓰지 않음
// 그 예시로
switch(평가) {
    case A :
    //A일 때 코드
    case B :
    //B일 때 코드
}
// ------------------------------
if (평가 == A ) {
    //A일 때 코드
}
else if (평가 == B) {
    //B일 때 코드
}

// 두 코드 다 같은 기능을 수행하는 코드이다.

// switch문은 만나는 조건 밑의 코드들을 다 실행함 그래서 break가 필요함. 조건을 만났을 때 그 조건에 맞는 코드를 실행하고 벗어나야하기 때문에
let fruit = prompt("무슨 과일을 살 것 입니까?")

switch (fruit) {
    case '사과' :
        console.log('100원 입니다.')
        break;
    case '바나나' :
        console.log('200원 입니다.')
        break;
    case '키위' :
        console.log('300원 입니다.')
        break;
    case '멜론' :
        console.log('500원 입니다.')
        break;
    default :
        console.log("판매하지 않습니다.") // if문 같은 경우에는 else를 사용할 수 있지만, switch문은 default를 사용함.
}