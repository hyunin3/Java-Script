function getSortedArr(array) {

  // 1. 출연 빈도 구하기
  const counts = array.reduce((pv, cv)=>{
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
  }, {});

  // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...] 
  const result = [];
  for (let key in counts) {
      result.push([key, counts[key]]);
  }

  // 3. 출현 빈도별 정리하기
  result.sort((first, second) => {
      // 정렬 순서 바꾸려면 return first[1] - second[1];
      return second[1] - first[1];
  });

  return result;
}

const numbers = [3, 5, 13, 20, 21, 37, 6, 12, 31, 35, 38, 43, 21, 26, 30, 32, 33, 35,
    5, 17, 26, 27, 35, 38, 22, 26, 29, 30, 34, 45, 14, 19, 27, 28, 30, 45, 
    4, 7, 12, 14, 22, 33, 13, 20, 24, 32, 36, 45, 8, 13, 19, 27, 40, 45, 11, 23, 25, 30, 32, 40,
    7, 10, 22, 25, 34, 40, 3, 10, 24, 33, 38, 45, 4, 24, 27, 35, 37, 45, 20, 31, 32, 40, 41, 45,
    3, 6, 22, 23, 24, 38, 3, 6, 9, 18, 22, 35, 3, 18, 19, 23, 32, 45, 6, 11, 16, 19, 21, 32]
console.log(getSortedArr(numbers))
