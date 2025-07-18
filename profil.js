// profil.js - Page-Specific Scripts (UPDATED)

document.addEventListener('DOMContentLoaded', function() {
    // --- Elemen Aksi Halaman ---
    const editButton = document.getElementById('editBtn');
    const qrButton = document.getElementById('qrBtn');

    // --- Elemen Modal QR Code ---
    const modal = document.getElementById('qrModal');
    const closeModalBtn = document.getElementById('closeModal');
    const qrCanvas = document.getElementById('qrCanvas');
    
    // --- Fungsi Tombol Aksi ---
    if (editButton) {
        editButton.addEventListener('click', function() {
            alert('Fitur "Edit Data" akan diaktifkan di versi mendatang. Ini akan memungkinkan Anda untuk memperbarui informasi profil.');
        });
    }

    // --- Logika untuk Modal QR Code ---
    function openModal() {
        if (modal) {
            // 1. Siapkan data yang akan di-encode ke QR Code
            const childData = {
                nama: "Arka Putra",
                tgl_lahir: "2023-05-01",
                gol_darah: "A+",
                jkn: "0001234567890",
                ibu: "Dewi Lestari"
            };
            
            // 2. Ubah data menjadi format string JSON
            const dataString = JSON.stringify(childData);
            
            // 3. Generate QR Code ke Canvas
            if (qrCanvas && QRCode) {
                QRCode.toCanvas(qrCanvas, dataString, {
                    width: 220,
                    margin: 2,
                    errorCorrectionLevel: 'H' // High
                }, function (error) {
                    if (error) console.error(error);
                    console.log('QR Code berhasil dibuat!');
                });
            }
            
            // 4. Tampilkan modal
            modal.style.display = 'flex';
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    if (qrButton) {
        qrButton.addEventListener('click', openModal);
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Menutup modal jika user mengklik di luar area konten modal (overlay)
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});