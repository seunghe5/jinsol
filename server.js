const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

//기본 경로 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 회원가입 처리
app.post('/signup', (req, res) => {
    const newUser = req.body;

    // userData.json 파일 읽기
    const filePath = path.join(__dirname, 'userData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: '서버 오류' });
        }

        const users = JSON.parse(data);

        // 중복 아이디 확인
        const existingUser = users.find(user => user.username === newUser.username);
        if (existingUser) {
            return res.status(400).json({ success: false, message: '이미 존재하는 아이디입니다.' });
        }

        // 새 사용자 추가
        users.push(newUser);

        // userData.json 파일에 저장
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: '서버 오류' });
            }

            res.json({ success: true });
        });
    });
});

// 로그인 처리
app.post('/login', (req, res) => {
    const loginUser = req.body;

    // userData.json 파일 읽기
    const filePath = path.join(__dirname, 'userData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        // 예외처리
        if (err) {
            return res.status(500).json({ success: false, message: '서버 오류' });
        }

        const users = JSON.parse(data);

        // 사용자 인증
        const user = users.find(user => user.username === loginUser.username && user.password === loginUser.password);
        if (user) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: '아이디나 비밀번호가 일치하지 않습니다.' });
        }
    });
});

// 서버 시작
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
