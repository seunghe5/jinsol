document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = { username, password };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('token', data.token);
            alert('로그인 성공');
            window.location.href = 'index.html';
        } else {
            alert('로그인 실패: ' + data.message);
        }
    });
});
