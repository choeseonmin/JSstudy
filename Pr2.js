//대화 상자

//alert 알림창, prompt 입력값을 받는 창을 만드는 함수?


const name = prompt("이름을 입력하세요.", "최선민"); //인풋창 placegholder 처럼 사용할 수도 있다.
alert("환영합니다. "+ name + "님");
alert("환영합니다. "+ name + "님");

const isAdult = confirm("당신은 성인 입니까?") // alert는 알림창이기 때문에 확인 버튼만 있지만, confirm은 취소, 확인 버튼이 생김
console.log(isAdult);

