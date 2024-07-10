// Registration
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    }
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        sessionStorage.setItem('username', username);
        window.location.href = 'secured.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Secured Page
if (window.location.pathname.endsWith('secured.html')) {
    const username = sessionStorage.getItem('username');
    if (!username) {
        alert('You need to login first!');
        window.location.href = 'login.html';
    } else {
        document.getElementById('username').textContent = username;
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        sessionStorage.removeItem('username');
        window.location.href = 'index.html';
    });
}
