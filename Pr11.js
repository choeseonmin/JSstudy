// 객체

// 이름은 선민, 나이는 27살의 슈퍼맨 객체를 만들어봄

const SUPERMAN = {
    name : '선민',
    age : 27,
}
//SyntaxError: Invalid shorthand property initializer 에러가 떠서 검색을 해보니 속성에 값을 대입할 때에는 = 가 아닌 : 를 사용해야한다.

// 접근
delete SUPERMAN.age;
console.log(SUPERMAN)
console.log(SUPERMAN.name) // 선민
console.log(SUPERMAN['age']) // 27


오브젝트 넣을 함수를 만들고 그 함수 안에 변수를 선언하고 값을 넣고 출력하면 넣은 값이 출력 됨
function makeObject(name, age) {
    return {
        name,
        age,
        hobby : 'singing'
    }
}

const Min = makeObject("Min", 27);
console.log(Min)

// Min 변수안에 age, birthday가 있는지 확인하는 문법 = in 있으면 true, 없으면 false
console.log('age' in Min)
console.log('birthDay' in Min)

function isAdult(user){
    if(!('age' in user) || // user에 age가 없거나
        user.age < 20){ // 20살 미만이거나
        return false;
    } else {
        return true;
    }
}

const Min = {
    name : 'Min',
    age : 21
}

const Se = {
    name : 'seungeun',
}

console.log(isAdult(Min))

const Min = {
    name : 'Min',
    age : 27
};

for (x in Min) {
    console.log(Min[x]) // Min['name'], Min['age']를 각각 한바퀴씩 돔
}








// // 추가
// SUPERMAN.gender = 'male';
// SUPERMAN['hairColor'] = 'black';
//
// // 삭제
// delete SUPERMAN.hairColor;
//
// // 단축 프로퍼티
// const name : '선민';
// const age : 27;
//
// const SUPERMAN = {
//     name,
//     age,
//     gender : 'male';
// }
//
// // 존재하지 않는 프로퍼티 존재 여부 확인
// SUPERMAN.birthDay; // 없는 프로퍼티이니 undefined 출력
//
// // 존재 여부 확인하는 방법은 in을 사용하면 됨
// 'birthDay' in SUPERMAN; // 없으니 false 출력
// 'age' in SUPERMAN; // 있으니 true 출력
//
// // for .. in 반복문
// for (let key in SUPERMAN){
//     console.log(key)
//     console.log(SUPERMAN[key])
// }