######
비동기식 JS와 XML
비동기 통신을 이용하면 화면 전체 새로고침 하지 않아도 화면의 일부만 업데이트 가능(비동기성)
이러한 비동기 통신 웹 개발 기술을 AJAX라 하고 이를 위한 라이브러리 중 하나가 Axios

페이지 전체를 새로고침하지 않아도 수행되는 비동기성. 전체 페이지가 아닌 일부분만을 업데이트 가능

######
장고에서 비동기 적용
좋아요 누르면 새로고침되는거 없애는 작업

form에서 action과 method속성 삭제
event.preventDefault()로 submit 이벤트 취소
axios({
  method: 'post',
  url: `/accounts/${userId}/follow`,
})

팔로우에서 액시오스로 포스트 요청을 보내기 위해서는 url에 작성할 user pk를 작성해야 하고
csrf토큰도 필요함

accounts의 프로필에서 form에 data-user-id="{{ person.pk }}"

스크립트에 const userId = event.target.dataset.userId

csrf는 const csrftoken = document.querySelector()
