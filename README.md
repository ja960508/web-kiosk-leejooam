# ✨ 예쁜 키오스크 만들기 (👍 이주암)

![animation](https://user-images.githubusercontent.com/60131316/184620004-998fffbf-6694-4379-8a35-194ba0a3ef7c.gif)

## 데모 링크
http://13.125.50.161:4000

## 사용 기술
### 🎉 Frontend
Typescript, React, styled-components
### 🔥 Backend
Typescript, Nest, MySQL

## 1. 입장 페이지
<img width="923" alt="스크린샷 2022-08-12 오후 6 04 45" src="https://user-images.githubusercontent.com/60131316/184620608-e5783960-ec02-41e4-ad16-b8b482640a75.png">
<img width="815" alt="스크린샷 2022-08-12 오후 6 05 35" src="https://user-images.githubusercontent.com/60131316/184620611-3c831161-ed30-4337-9cfc-5a1147b9f1d9.png">

가게 로그인과 회원가입을 진행할 수 있다. 로그인 시 storeId를 localStorage에 저장하고 App에서 초기 실행 시 localStorage의 값을 확인하고 가게 정보를 불러온다.

## 2. 어드민 페이지
<img width="889" alt="스크린샷 2022-08-12 오후 6 05 52" src="https://user-images.githubusercontent.com/60131316/184620949-a35591ff-fb77-452b-bf5e-d5b21a9b8bc6.png">
<img width="649" alt="스크린샷 2022-08-12 오후 6 06 05" src="https://user-images.githubusercontent.com/60131316/184620932-d2130d94-910f-4131-873b-59f0bd3a23a0.png">

가게로 로그인 시 나타나는 페이지이다. 상품 등록/삭제, 카테고리 등록/삭제 작업을 할 수 있다.

## 3. 손님 페이지
<img width="893" alt="스크린샷 2022-08-12 오후 6 06 19" src="https://user-images.githubusercontent.com/60131316/184621192-79994aa0-1a83-4e94-8aa6-a6603fd2245a.png">
<img width="949" alt="스크린샷 2022-08-12 오후 6 06 33" src="https://user-images.githubusercontent.com/60131316/184621203-dea75988-ec95-4e32-b506-8c4dbc80a8b7.png">
<img width="943" alt="스크린샷 2022-08-12 오후 6 07 12" src="https://user-images.githubusercontent.com/60131316/184621208-985b1c76-9c43-4037-92ba-07cc78e7aaa6.png">

손님 페이지에서는 사용자의 동작에 따라 각각에 맞는 모달창이 나타난다. 모달은 overlay 부분을 클릭하면 닫힌다.
