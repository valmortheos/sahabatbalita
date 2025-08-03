// login.js - Logika untuk halaman login & registrasi

document.addEventListener('DOMContentLoaded', function() {
    // Elemen Form
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Tautan untuk beralih
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    
    // Judul dan Subjudul
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');

    // Tampilkan form registrasi
    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Buat Akun Baru';
        formSubtitle.textContent = 'Isi data berikut untuk memulai perjalanan Anda.';
    });

    // Tampilkan form login
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Selamat Datang Kembali';
        formSubtitle.textContent = 'Masuk untuk melanjutkan ke dashboard Anda.';
    });

    // Validasi Form Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (email.trim() === '' || password.trim() === '') {
                alert('Email dan Kata Sandi tidak boleh kosong.');
            } else {
                window.location.href = loginForm.action;
            }
        });
    }

    // Validasi Form Registrasi
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;

            if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
                alert('Semua kolom harus diisi.');
            } else {
                alert('Pendaftaran berhasil! Anda akan diarahkan ke dashboard.');
                window.location.href = registerForm.action;
            }
        });
    }
});