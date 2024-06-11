document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    const authNav = document.getElementById('auth-nav');

    if (token) {
        authNav.innerHTML = '<ul><li><a href="#" id="logout">로그아웃</a></li></ul>';
        document.getElementById('logout').addEventListener('click', function() {
            localStorage.removeItem('token');
            window.location.href = 'index.html';
        });
    }
});
