![image](https://user-images.githubusercontent.com/68590947/222979930-50f84650-4810-4ed1-8d39-bcdd85f3b24b.png)


### 🔗 배포 링크 https://behoney.info


## 📚 목차
+ [프로젝트](#프로젝트)
+ [아키텍쳐](#아키텍쳐)
  * AWS 구조
  * FE - BE 구조
+ [구현화면](#구현화면)
  * 메인화면
  * 프로젝트 내역
  * 로그인
  * 회원가입
  * 이력서 보기
  * 이력서 프린팅
  * NFT 목록
  * NFT 민팅
  * 댓글
  * DID 발급
  * DAO 구성
  * Generative Art
  
+ [수정사항](#수정사항)
+ [적용예정](#적용예정)

# 프로젝트
## 🚀 프로젝트 개요
프로젝트를 여러번 진행해봤지만 BE 파트를 맡아서 진행해본 경험이 거의 없어서 해본 경험을 최대한 담아서 자기소개 및 포트폴리오 사이트를 만들고자 하였습니다.

## 📃 프로젝트 요약
* 회원가입
* 로그인
* 글작성
* 이력서 보기
* 이력서 프린팅 및 저장
* NFT 민팅

## 🌊 플로우차트

# 아키텍쳐
## 🗃 AWS 구조

![image](https://user-images.githubusercontent.com/68590947/222976284-03f72514-1fcb-4b43-a481-58dbbee27fd3.png)

## 🐳 FE - BE 구조

![image](https://user-images.githubusercontent.com/68590947/222979135-d8f82a0e-c4ec-441e-87bb-62e9d31b3f46.png)



# 구현화면

|메인화면|프로젝트 내역|
|---|---|
|![main-page](https://user-images.githubusercontent.com/68590947/222918132-6f1a7773-5945-4aff-ba15-70c9d896d782.gif)|![project](https://user-images.githubusercontent.com/68590947/222918139-a314dec6-ba73-41d9-b5de-bc30b96ffdef.gif)|

|로그인|회원가입|
|---|---|
|![signin](https://user-images.githubusercontent.com/68590947/222921574-8deb531d-0d35-4252-9a2a-65f3c509f910.gif)|화면수정중|

|이력서보기|이력서 프린팅|
|---|---|
|![resume-view](https://user-images.githubusercontent.com/68590947/222921642-fbd0b94c-aa5a-4385-be91-efbba7c3c709.gif)|![resume-pdf](https://user-images.githubusercontent.com/68590947/222921649-f65f4d57-3b66-42c8-84cc-8b3cb94a92f1.gif)|

|NFT 목록|NFT Mint|
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

# 적용예정

```
- 이미지 다중 업로드
- 무중단 배포
- 배포 자동화
- 테스트 코드
- 부하 테스트
- DID 발급
- DAO 환경적용
- Generative Art
```
