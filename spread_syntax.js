// 배열과의 사용(배열 복사)

let parts = ['어깨', '무릎']
let lyrics = ['머리', ...parts, '발']
console.log(lyrics)


// 함수와의 사용(rest parameters)

const restOpr = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, restArgs]
}
console.log(restOpr(1, 2, 3, 4, 5))
console.log(restOpr(1, 2))

