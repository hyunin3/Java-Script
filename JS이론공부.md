######
JavaScript는 클라이언트 측 웹(브라우저)에서 실행
이벤트 발생 시 웹페이지가 작동하는 디자인/프로그래밍. 동작제어에 사용
HTML문서의 컨텐츠를 동적으로 변경

######
웹 브라우저는 URL을 통해 웹을 탐색. HTML/CSS/JavaScript를 해석해서 사용자에게
화면으로 보여줌
javascript engine 대체적으로 웹브라우저에서 사용. 웹브라우저의 console에서 자바스크립트 입력해도 실행됨. Vanilla JavaScript 웹 브라우저에서 바로 실핼할 수 있는 문법들
ECMAscript는 자바스크립트를 표준화하며 기본적인 문법, 데이터 타입, 연산자 등을 정의

######
식별자는 변수를 구분할 수 있는 변수명. 문자, $, _ 로 시작. for, if, function 등 예약어 사용불가

1. 카멜 케이스 - 변수, 객체, 함수에 사용. camelCase
2. 파스칼 케이스 - 클래스, 생성자에 사용. PascalCase
3. 대문자 스네이크 케이스 - 상수에 사용. SNAKE_CASE

######
변수 선언 키워드
셋 다 변수 선언하며 동시에 값을 초기화

1. let 블록 스코프 지역 변수를 선언. 재할당 가능. 재선언 불가능
2. const 블록 스코프 읽기 전용 상수를 선언. 재할당 및 재선언 불가능
3. var 변수를 선언. 재할당 및 재선언 가능

호이스팅: 변수를 선언 이전에 참조할 수 있는 현상. 원래는 undefined 반환해야하지만 변수를 코드 최상단으로 끌어올려 사용함

######
데이터 타입

1. 원시 타입(primitive type)
  Number- 정수 또는 실수형 숫자를 표현. NaN을 반환하는 몇 가지 경우가 있음 
  
  String- 문자열을 표현. 덧셈만 가능. 따옴표 사용하면 선언 시 줄 바꿈 \n만 가능. Template Literal사용(``과 ${}사용)
  
  null- 값이 없음
  
  undefined- 값이 할당되지 않은 변수. 값이 필요한데 할당 안해놨을 경우에 나옴
  
  Boolean - 참, 거짓

2. 참조 타입(reference type)
   Object- 이름과 값을 가진 속성들의 집합으로 이루어진 자료구조
   Array- 여러개의 값을 순서대로 저장하는 자료구조
   function- function키워드를 통해 생성하며 호출 시 실행될 코드를 정의

######
객체(object)
객체는 속성의 집합이며 {}내부에 키와 밸류 쌍으로 표현
key는 문자열 타입만 가능. value는 모든 타입 가능. 객체 요소는 .이나 []로 가능
키 이름에 띄어쓰기 같은 구분자 있을 시 대괄호만 접근 가능.

배열(Array)
키와 속성들을 담고 있는 참조 타입의 객체. 순서를 보장하는 특징이 있음. []로 생성. 파이썬과 유사한 방식으로 특정 값과 길이에 접근 가능

함수(Function)

함수 선언식 
function add(num1, num2) {
  return num1 + num2
}

함수 표현식 
const sub = function (num1, num2) {
  return num1 - num2
}

######
연산자
할당연산자- 단축연산자 지원
비교연산자- 비교하고 결과값을 t/f로 반환. 뒷쪽 문자가 크고 알파벳은 소문자가 대문자보다 큼.
일치연산자- === 사용. 암묵적 타입 변환 발생하지 않고 엄격한 비교함
논리연산자- and는 &&, or은 ||, not은 ! 이고 단축 평가 지원함
삼항연산자- 3개의 피연산자 사용
스프레드연산자- 배열이나 객체를 분리하여 전달

######
조건문
if, else if, else
조건은 소괄호 안에 작성. 실핼할 코드는 중괄호 안에 작성

######
반복문
while, for, for in(속성 이름을 통해 반복. 객체의 속성을 순회), for of(속성 값을 통해 반복. 반복 가능한 객체를 순회. array, set, string 등)

######
Event
HTML요소에서 발생하는 모든 상황을 의미. 클릭하면 무언가 결과를 받는 것 등

addEventListener()메서드를 통해 이벤트 처리기를 다양한 html요소에 부착하여 처리
Event handler(이벤트 처리기) 이벤트가 발생했을 때 호출되는 함수. 이벤트 객체를 매개로 전달받음
EventTarget.addEventListener(type,handler function)
  대상                    특정 이벤트     할 일

addEventListener 지정한 이벤트가 대상에 전달될 때마다 호출할 함수 설정
type 반응할 이벤트 유형을 나타냄. input, click, submit...  
handler function 지정된 타입의 이벤트 수신할 객체. 콜백함수여야 하고 이벤트 객체를 매개변수로 받음

addEventListener ~하면 ~한다. 특정 이벤트가 발생하면 할 일을 등록한다.

######
이벤트 전파: DOM요소에서 발생한 이벤트가 상위노드에서 하위노드 혹은 그 반대로 전파되는 현상
addEventListener 메서드를 사용해서 전파방식 제어 가능 
event.preventDefault() 현재 이벤트의 기본 동작을 중단. a태그(클릭시 이동)나 form태그(폼 데이터 전송) 등 기본 동작 작동 안하도록
h1.addEventListener('copy', function(event) {
  event.preventDefault()
})

btn.addEventListener('click', function (event) {
    event.preventDefault()
})

######
동기와 비동기

주문 후 커피 나올 때까지 기다림(동기식)
주문 순서 상관없이 나오는 대로 가져감(비동기식)

1. 동기
모든 일을 순서대로 하나씩 처리. 이전 작업이 끝나면 다음 작업을 시작. 파이썬 코드 등

2. 비동기 
결과를 기다리지 않고 다음 작업 처리(병렬적 수행). 시간이 오래 걸리는 작업은 요청 보내고 응답 빨리 오는 작업부터 처리

사용자 경험에 긍정적 효과를 보기 위해 비동기 사용. 동기식 처리로 하면 이미지 등 오래 걸리는 작업하면 로딩 오래 걸려서 멈춘것처럼 느낌.

######
JS는 single thread언어라서 동시에 여러 작업 처리 못함. 비동기 처리 도와주는 환경 필요. 
비동기와 관련된 작업은 브라우저나 노드 환경에서 처리.
1. Call Stack
2. Web API
3. Task Queue
4. Event Loop

비동기 처리의 동작방식
1. 모든 작업은 Call Stack으로 들어간 후 처리
2. 오래 걸리는 작업이 Call Stack으로 들어오면 Web API로 보내 별도로 처리