# 기능
- 회원가입
- 로그인
- 로그인 유지
- 값 뿌리기
- zustand로 전역상태 관리
- styled-components 사용
- react-router-dom 사용

## 회원가입 
`/src/components/Signup.js`
- 회원가입 버튼을 눌러 onSubmit 함수를 불렀을 때 유효성 겁사 하는 상태 값이 전부 true일 경우에만 회원가입 성공
- local storage에 값 array.push를 사용해 저장
### 유효성 검사
- 아이디 : 5자리 이상 19자리 이하의 값
- 비밀번호 : 숫자+영문자+특수문자 조합으로 8자리 
이상 
- 비밀번호 체크 : 위에 비밀번호 값과 동일한지 체크

## 로그인
`/src/components/Login.js`
- 로그인 버튼을 눌렀을 때 local storage에 저장된 값을 가져와 
- 입력한 id,pw 값과 배열 안의 값을 array.find로 비교하여 첫번째 값을 가져와 loginUser 상태 값에 아이디를 저장
- useEffect로 loginUser값의 변화를 감지하여 값이 true 있을 때 로그인 유지에 사용할 또다른 local storage 값에 loginUser 값을 넣고 home 페이지로 이동

## 로그인 유지
`/src/components/common/Header.js`

- useEffect로 localStorage에 저장된 값의 상태 변화를 확인 하며 값이 있을 때 값을 가져와 loginUser 상태 값에 저장
- 로그아웃 버튼 클릭시 removeItem 메서드를 사용하여 local stroage에 저장된 loginUser값만 지움
- 값이 없을 때에는 강제로 login 페이지로 이동

## 값 뿌리기
`/src/data/index.js`

- 데이터 값들을 index.js에 넣어 두고 필요한 곳에서 
- react-router-dom의 useParams를 사용하여 분기 처리

<aside>
💡 `?이 값들을 전역에서 상태관리 하는건지 의문`
</aside>

## zustatnd
`/src/store/auth/index.js`
- 리덕스에서 사용했던 개발자 툴 사용 가능
- create 함수를 사용하여 스토어를 만든다.
- 상태와 그 상태를 변경하는 액션을 정의
- set으로 상태를 변경하는 액션을 정의
- 다른 곳에서 전역 상태 값과, 액션을 가져올 떄에는 useCallback과 함께 사용
- useState 처럼 사용하면 됨
- state.전역상태값 형태를 불러와 사용

---
# 개발 예정
### 기능
- 미들웨어 적용
- 쿠키 만료 값 지정
- 게시판 추가 수정 삭제 
- 댓글 대댓글
- 페이지 네이션
- 성능 최적화
### css
- @media, active 적용
- 헤더 상단에서 왼쪽으로 위치 변경