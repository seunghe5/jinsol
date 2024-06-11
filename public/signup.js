document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const confirmPassword = event.target['confirm-password'].value;

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    const user = { username, password };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('회원가입 성공');
            window.location.href = 'login.html';
        } else {
            alert('회원가입 실패: ' + data.message);
        }
    });
});