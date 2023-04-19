// 표현식
const arrow1 = function(name) {
  return `hello, ${name}`
}
console.log(arrow1(`april`))

// 화살표 함수
const arrow2 = (name) => {return `hello, ${name}`} 
console.log(arrow2(`march`))


// 선언식
function sum(n1, n2) {
  return n1+n2
}
console.log(sum(2, 7))

// 표현식
const sub = function (num1, num2) {
  return num1 - num2
}
console.log(sub(8, 3))

// 선언식은 익명함수 불가능. 호이스팅 있음
// 표현식은 익명함수 가능. 호이스팅 없음
