// 형 변환

// const mathScore = prompt("수학 점수는?")
// const engScore = prompt("영어 점수는?")
// const result = (mathScore + engScore) / 2;
//
// console.log(result)

// 프롬프트는 문자형으로 입력받는다.
// 100과 50을 입력하면 5025가 출력되는데
// 문자형으로 출력이 되지만 / 나누기 기호 때문에 2로 나누어진 값이 나온다
// 이유는 / 는 문자형을 받아도 숫자형으로 "자동 형변환"이 되기 때문이다.


// String은 문자형으로 변환하는 문법
console.log(
    String(3),
    String(true),
    String(false),
    String(NaN),
    String(undefined)
)

// Number는 문자열을 숫자형으로 변환하는 문법
// "1234가나다"를 출력하려고 하면 NaN이 출력됨
// true, false 는 각각 1,0으로 출력됨
console.log(
    Number("1234"), // 1234 출력
    Number("1234가나다"), // NaN 출력됨
    Number(true), // 1
    Number(false) // 0
)

//boolean은 참 거짓을 나타내는 형변환 문법
// false는 부정적인 뜻으로 많이 쓰이기 때문에 숫자 0, 빈 문자열 "", null, undefined, NaN은 false로 변환됨

console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

//주의사항

Number(null) // 0출력
Number(undefined) // NaN 출력

Number(0) // 0은 false
Number('0') // 문자 0은 true
Number("") // 빈 문자열은 false
Number(' ') // 띄어쓰기가 있는 문자열은 true


