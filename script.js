// script.js - Skrip global untuk semua halaman (UPDATED)

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sahabat Balita global script loaded.');

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', function() {
            // Toggle menu
            const isVisible = mobileNav.style.display === 'flex';
            mobileNav.style.display = isVisible ? 'none' : 'flex';
        });

        // Tambahan: Tutup mobile nav saat resize ke desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992 && mobileNav) {
                mobileNav.style.display = 'none';
            }
        });

        // Tambahan: Tutup mobile nav saat klik link di dalamnya
        mobileNav.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                mobileNav.style.display = 'none';
            }
        });
    }

    // Kode untuk tombol Bita (AI) yang sebelumnya sudah tidak diperlukan di sini
    // karena sudah diganti dengan link <a href="bita.html">

});