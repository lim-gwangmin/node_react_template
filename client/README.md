# Project FrontEnd Spec

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 환경 설정

| 프로그램 명 | 버전 명 |
| :---------- | :------ |
| Node.js     | v22.3.0 |
| NPM         | v10.8.1 |
| VITE        | v5.4.0  |
| react       | v18.2.0 |

## .env

```
VITE_PORT            : 프론트엔드 로컬 포트
VITE_API_URL         : API URL
```

## 폴더 구조

```
├─ .env                 : 환경 변수 모음
├─ public               : 정적 파일 모음
├─ src
│  ├─ api               : API 설정 모음 파일
│  ├─ assets            : 이미지, 폰트, 아이콘 모음 파일
│  ├─ components        : 컴포넌트 모음 파일
│  ├─ constant          : 상수 모음 파일
│  ├─ hooks             : 커스텀 훅 모음 파일
│  ├─ pages             : 페이지 관련 파일
│  ├─ routes            : 라우트 설정 파일
│  ├─ schema            : 스키마 모음 파일
│  ├─ services          : API SERVICE 모음 파일
│  ├─ states            : 전역 상태관리 파일
│  ├─ styles            : css 스타일 관리 파일
│  └─ utils             : 공통 util 함수 관리 파일
```
