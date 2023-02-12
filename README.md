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

### ⚙️ SETTINGS

- 환경설정은 총 3개로 이뤄져있습니다. ( 2023. 02. 08 기준 )

1. 블록체인 개발환경 ( Hardhat )
2. 프론트엔드 개발환경 ( React.js )
3. 백엔드 개발환경 ( Node.js )

### 블록체인 개발 환경

```
# 디렉토리 이동
cd chain/

# 패키지 설치
npm install

# .env 파일 생성
touch .env

# .env 파일 수정
MY_SECRET_KEY= [FIX] ETH WALLET SECRET KEY
MY_QUICKNODE_URL= [FIX] QUICK NODE RPC URL

# 실행
npx hardhat compile
npx hardhat run scripts/deploy.ts --network goerli

# 실행 단축 명령어
npm run start

```

### 프론트엔드

```
# 해당 디렉토리
cd client/

# 패키지 설치
yarn install

# .env 파일 생성
touch .env

# .env 파일 수정
# 수정 예정
REACT_APP_SERVER_URL=https://localhost:9999
REACT_APP_BLOCKCHAIN_SERVER_URL=https://localhost:9992
REACT_APP_CONTRACT_LMIM_ADDRESS=0x7dac1c5aa3bB5EBaa316b569703d5e12Dc9ea02b
```

### 백엔드 ( Auth, Project Server )

```
# 디렉토리 이동
cd server/auth_server/

# .env 파일 생성
touch .env

# .env 파일 수정
# 수정 예정
SERVER_PORT=9999
SERVER_URL=https://localhost:9999
MONGO_URI= [FIX] MONGODB Connect URL
SCRYPT_SALT= [FIX] Random String
JWT_SECRET= [FIX] Secret String

KAKAO_ID= [FIX] KAKAO Developer API Key
KAKAO_REDIRECT=https://localhost:9999/api/v1/auth/oauth/kakao/redirect

GOOGLE_CLIENT_ID= [FIX] GOOGLE Developers API Id
GOOGLE_CLIENT_SECRET= [FIX] GOOGLE Developers API Secret Key
GOOGLE_REDIRECT=https://localhost:9999/api/v1/auth/oauth/google/callback

AWS_S3_ACCESS_KEY_ID= [FIX] AWS Access Key
AWS_S3_SECRET_ACCESS_KEY= [FIX][DANGER] AWS Secret Key 매우 위험하니 반드시 루트사용자가 아닌 IAM 사용자로 할 것!
AWS_S3_REGION=ap-northeast-2
AWS_S3_BUCKET= [FIX] S3 버킷명

# 실행
npm run start // 실행 시 디렉토리 내부에 key.pem, cert.pem이 존재해야합니다.

# 디렉토리 이동
cd server/blockchain

# touch .env

# .env 파일 수정
SERVER_PORT=9992
MONGO_URI= [FIX] MONGODB Connect URL

PINATA_API_KEY= [FIX] Pinata API Key
PINATA_API_SECRET_KEY= [FIX] Pinata API Secret Key

CONTRACT_LMIM_ADDRESS=0x7dac1c5aa3bB5EBaa316b569703d5e12Dc9ea02b

# 실행
npm run start:dev // TS로 작성되어서 필수입니다.

// SERVER PORT LIST

// 9990 ~ 9999
9992 : BlockChain Server
9999 : Auth Server
```

# 수정사항

### 2023-02-11

FE - Nav bar Container 부분만 색상이 들어가 있는 부분 수정
FE - 이력서 프린트 버튼 상단으로 위치 변경
FE - 이력서 프린트 시 화면의 크기에 따라 프린트 설정 달라지는 부분 수정
FE - 이력서 내용 수정
FE - FOOTER 수정
FE - 블록체인 테마 바 수정

### 2023-02-12

FE - 블록체인 런칭 페이지 수정
FE - 회원가입 이미지 수정
FE - 로그인 이미지 수정
FE - 블록체인 이미지 수정

# 수정 해야 할 사항
