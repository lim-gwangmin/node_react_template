# Project BackEnd Spec

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 환경 설정

| 프로그램 명 | 버전 명 |
| :---------- | :------ |
| Node        | v22.3.0 |
| Npm         | v10.8.1 |

## .env

```
PORT              : node 서버 포트
CLIENT_PORT       : React와 통합환경으로 개발 시, React 로컬 서버 포트 (CORS 설정)
DB_HOST           : DB host
DB_USER           : DB user
DB_PASSWORD       : DB password
DB_NAME           : DB name
JWT_SECRET        : JWT 비밀 키
```

## 폴더 구조

```
├─ .env          : 환경 변수 모음
├─ client        : 클라이언트 폴더 (React, EJS 등 프론트엔드 코드)
├─ config        : 설정 파일 모음 (데이터베이스 및 기타 환경 설정)
├─ controllers   : 각 요청에 대한 로직을 처리하는 컨트롤러 모음
├─ middlewares   : 요청 처리 과정에서 사용되는 미들웨어 파일 모음
├─ routes        : API 엔드포인트를 정의하고 컨트롤러와 연결하는 파일 모음
└─ server.js     : 서버 진입점 파일, 서버를 초기화하고 설정 및 라우트를 불러옴
```

## npm

```json
"scripts": {
  "start": "NODE_ENV=production node -r dotenv/config server.js dotenv_config_path=.env.production",
  "client": "npm run dev --prefix client",
  "dev": "concurrently \"nodemon -r dotenv/config server.js dotenv_config_path=.env.local\""
}
```

### npm script

```
1. `npm start` : `프로젝트를 배포`모드로 실행
   •	NODE_ENV=production: 서버를 배포 모드로 설정하여 실행합니다.
	•	-r dotenv/config: .env.production 파일을 로드하여 환경 변수를 설정합니다.
	•	dotenv_config_path=.env.production: 배포 환경에 필요한 환경 변수 파일을 명시적으로 지정합니다.

2. `npm run client` : `클라이언트 애플리케이션을 실행`합니다. client 디렉토리에서 클라이언트 전용의 개발 서버가 시작됩니다.
   •	--prefix client: client 폴더 내에서 npm run dev 명령을 실행하여, React/Vite 개발 서버를 시작합니다.
	•	주로 프론트엔드 개발 시 사용됩니다.

3. `npm run dev` : `개발 환경에서 백엔드 서버를 실행`합니다. 파일 변경 시 `자동으로 서버가 재 시작`되도록 설정되어 있습니다.
	•	concurrently: 여러 명령어를 동시에 실행할 수 있도록 지원합니다.
	•	nodemon: 파일 변경을 감지하여 서버를 자동으로 재시작합니다.
	•	dotenv_config_path=.env.local: .env.local 파일을 로드하여 개발 환경에 맞는 환경 변수를 설정합니다.
	•	프론트엔드와 백엔드를 동시에 개발하기 위한 핫 리로딩(Hot Reloading) 설정입니다.
```
