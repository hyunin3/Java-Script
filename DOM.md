######
선택 관련 메서드
1. document.querySelector(selector)
제공한 선택자와 일치하는 element 한 개 선택
제공한 CSS selector 만족하는 첫번째 element 객체를 반환 (없다면 null)

console.log(document.querySelector('#title')) 
--> id가 title인 것 하나

console.log(document.querySelector('.text'))
--> class가 text인 것 중 첫번째

2. document.querySelectorAll(selector)
제공한 선택자와 일치하는 여러 element 선택
제공한 CSS selector 만족하는 NodeList 반환

console.log(document.querySelectorAll('.text'))
--> class text인 것들

console.log(document.querySelectorAll('body>ul>li'))
--> body>ul>li 안에 있는 것들

######
조작 관련 메서드
1. (생성) document.createElement(tagName)
작성한 tagName의 HTML요소를 생성하여 반환
const title = document.createElement('h1')

2. (입력) HTMLElement.innerText
텍스트 추가. 사람이 읽을 수 있는 요소만 남기고 스타일링 적용된 모습으로 표현
title.innerText = 'DOM 조작'

선택자로 div태그 가져와서
const div = document.querySelector('div')

3. (추가) Node.appendChild()
한 노드를 특정 부모 노드의 자식 노드리스트 중 마지막 자식으로 삽입.
한번에 하나만 가능. 추가된 노드 객체 반환
div.appendChild(title)
새롭게 생성한 노드가 아니라 이미 있던 것을 다른 노드 자식으로 삽입할 경우 이동

4. (삭제) Node.removeChild()
DOM에서 자식 노드 제거. 제거된 노드 반환   
div.removeChild(title)

######
속성 조회 및 설정
1. Element.getAttribute(attributedName)
해당 요소의 지정된 값 반환. 인자(attributedName)는 값을 얻고자 하는 속성의 이름

2. Element.setAttribute(name, value)
지정된 요소의 값을 설정. 속성이 이미 존재하면 갱신, 아니면 지정된 이름과 값으로
새 속성 추가

a tag 생성 및 컨텐츠 추가
const aTag = document.createElement('a')
aTag.innerText = '구글'

a 태그의 href 속성 추가 
aTag.setAttribute('href', 'https://google.com')
console.log(aTag.getAttribute('href'))

div 태그의 자식 태그로 a 태그 추가
const div = document.querySelector('div')
div.appendChild(aTag) --> 여기서 링크 걸린 구글이 화면에서 보임

h1 태그 선택 및 클래스 목록 조회
const h1 = document.querySelector('h1')
console.log(h1.classList)

클래스가 존재하지 않으면 클래스를 추가하고 true를 반환
클래스가 존재한다면 제거하고 false를 반환
h1.classList.toggle('blue')
console.log(h1.classList)

######
이벤트 추가
addEventListener('click', function () {
  axios.get(URL)
    .then(() => {
      console.log(response.data)
    })
})

이벤트 전파 취소
현재 이벤트의 기본 동작을 중단. a태그의 클릭시 특정 주소로 이동, form태그의 폼 데이터 전송 등을 막음
event.preventDefault() 