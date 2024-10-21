require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const CLIENT_PORT = process.env.CLIENT_PORT || 5173;
const PORT = process.env.PORT || 3100;

// CORS 설정
app.use(
  cors({
    origin: `http://localhost:${CLIENT_PORT}`, // React 개발 서버의 주소
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    credentials: true, // 쿠키 인증 요청을 허용하려면 true로 설정
  }),
);

// 정적 파일 제공을 위해 Express에 client/dist 폴더를 설정
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// API 예시
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// 모든 기타 경로에 대해 React 애플리케이션의 index.html 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`API 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
