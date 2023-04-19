//화살표 함수 사용
const nums = [1, 2, 3, 4].map(item => item**3)
console.log(nums)  

const numbers = [1, 2, 3, 4]
const triNumbers = numbers.map((number) => {
  return number **3
})
console.log(`#1 ${triNumbers}`)



//forEach 사용. 표현식 
// const numbers = [1, 2, 3, 4]
// numbers.forEach(function (num) {
//   console.log(num ** 3)
// })
// 1 8 27 64가 각각 나옴(새로운 배열을 만들지 않음)


//map 사용. 표현식
const lst = [1, 2, 3, 4]
const tripleFunc = function(lst) {
  return lst **3
}
const tripleNumbers = lst.map(tripleFunc)
console.log(`#2 ${tripleNumbers}`)

//map 사용. 선언식
const lstt = [1, 2, 3, 4]
function triPle(a) {
  return a**3
}
const TripleNumbers = lstt.map(triPle)
// console.log(`#3 ${TripleNumbers}`)
console.log(TripleNumbers)


//Template literals 템플릿 리터럴 사용시 리스트 벗겨져서 나옴