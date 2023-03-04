## 😎 Let-Me-Introduce-Myself

이 프로젝트는 저 자신이 경험해본 기술들을 기록하기 위해 만들어진 프로젝트이고
또, 타인에게 보여드리기 위한 프로젝트입니다.

## 📚 목차

1. 환경설정 ( GET STARTED )
2. 프로젝트 소개 ( ABOUT )
3. 시연 ( DEMONSTRATION )

## 🍀 GET STARTED

### 🖨️ Clone this project

```
git clone https://github.com/qudgus9601/Let-Me-Introduce-Myself.git
```

### Server Port List

```
9980 : Auth Server
9981 : Project Server
9982 : Upload Server
9983 : BlockChain Server

```

### 💻 구현화면

|메인화면|프로젝트 내역|
|---|---|
|![main-page](https://user-images.githubusercontent.com/68590947/222918132-6f1a7773-5945-4aff-ba15-70c9d896d782.gif)|![project](https://user-images.githubusercontent.com/68590947/222918139-a314dec6-ba73-41d9-b5de-bc30b96ffdef.gif)|

|로그인|회원가입|
|---|---|
|![signin](https://user-images.githubusercontent.com/68590947/222921574-8deb531d-0d35-4252-9a2a-65f3c509f910.gif)|화면수정중|

|이력서보기|이력서 프린팅|
|---|---|
|![resume-view](https://user-images.githubusercontent.com/68590947/222921642-fbd0b94c-aa5a-4385-be91-efbba7c3c709.gif)|![resume-pdf](https://user-images.githubusercontent.com/68590947/222921649-f65f4d57-3b66-42c8-84cc-8b3cb94a92f1.gif)|

|NFT List|NFT Mint|
|---|---|
|![blockchain-nft-list](https://user-images.githubusercontent.com/68590947/222921599-10063390-004f-43fd-8fea-fcb4884f5658.gif)|![blockchain-mint](https://user-images.githubusercontent.com/68590947/222921602-33e18100-8e93-4599-8b4e-79f1c7094dc1.gif)|


# 수정사항

### 2023-02-11

- FE - Nav bar Container 부분만 색상이 들어가 있는 부분 수정
- FE - 이력서 프린트 버튼 상단으로 위치 변경
- FE - 이력서 프린트 시 화면의 크기에 따라 프린트 설정 달라지는 부분 수정
- FE - 이력서 내용 수정
- FE - FOOTER 수정
- FE - 블록체인 테마 바 수정

### 2023-02-12

- FE - 블록체인 런칭 페이지 수정
- FE - 회원가입 이미지 수정
- FE - 로그인 이미지 수정
- FE - 블록체인 이미지 수정

### 2023-02-13

- FE - FOOTER UI 수정
- FE - Project 작성 규격 수정

### 2023-02-20

- FE - asset 저장소 변경 docker 이미지 크기 축소
- FE - UI UX 수정
- BE - GIF 업로드 안되던것 수정

### 2023-02-21

- FE - SSL 제거 (AWS Certificate Manager로 변경)
- BE - SSL 제거
- BE - https로 metadata 받아오던것 -> node-fetch로 변경
- Deploy - 배포 구조 변경 기존 (EC2,S3-Route53) => (EC2,S3-CloudFront-Route53)
- Settings - Production, Development 환경변수 분리
- Settings - gitignore 수정
- Docker - Dockerfile 제거
- Nginx - Nginx 제거

### 2023-02-22

- BE - 서버 분할

### 2023-02-24

- BE - Server 분할
- Docker - Docker-compose.yml 수정

### 2023-02-28

- FE - Logout 안되던 버그 수정
- Deploy - Docker Image 수정 ( normal -> alpine )
- Common - console 전부 제거
- BE - S3 연동시 코드 순서에 따라 오류가 발생되던 오류 수정

### 2023-03-01

- FE - NFT Mint 시 들어가는 Gasprice를 가져와서 조정하도록 수정

### 2023-03-05 (현재)
- BE - 카카오로그인, 구글로그인 수정 중

# 수정 해야 할 사항

```
- image multi upload
- 무중단 배포
- 배포 자동화
- TDD
- Stress Test
```
