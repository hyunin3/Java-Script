1. 선택 관련 메서드
document.querySelector(selector)
제공한 선택자와 일치하는 element 한 개 선택
제공한 CSS selector 만족하는 첫번째 element 객체를 반환 (없다면 null)

console.log(document.querySelector('#title'))


2. document.querySelectorAll(selector)
제공한 선택자와 일치하는 여러 element 선택
제공한 CSS selector 만족하는 NodeList 반환