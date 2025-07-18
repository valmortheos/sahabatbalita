// konsultasi.js - Page-Specific Scripts

document.addEventListener('DOMContentLoaded', function() {
    const consultationButtons = document.querySelectorAll('.btn-chat');

    consultationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengambil nama bidan dari elemen terdekat
            const card = button.closest('.bidan-card');
            const bidanName = card.querySelector('.bidan-info h3').textContent;

            const buttonText = button.textContent;

            if (buttonText.includes('Mulai Chat')) {
                alert(`Mempersiapkan sesi chat dengan ${bidanName}.\n\n(Fitur live chat akan tersedia di versi mendatang)`);
            } else if (buttonText.includes('Buat Janji')) {
                alert(`Anda akan diarahkan ke halaman penjadwalan untuk membuat janji dengan ${bidanName}.\n\n(Fitur penjadwalan akan segera hadir)`);
            }
        });
    });
});