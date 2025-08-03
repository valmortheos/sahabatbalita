document.addEventListener('DOMContentLoaded', function() {
    // --- Data Anak (ambil dari localStorage jika ada) ---
    let childData = JSON.parse(localStorage.getItem('childData')) || {
        nama: "Arka Putra",
        nik: "320xxxxxxxxxxxxx",
        jenis_kelamin: "Laki-laki",
        tgl_lahir: "2023-05-01",
        jkn: "0001234567890",
        anak_ke: "1",
        gol_darah: "A+",
        registrasi_kohort: "REG-2023-05-001",
        ibu: "Dewi Lestari"
    };

    // --- Elemen Aksi Halaman ---
    const editButton = document.getElementById('editBtn');
    const qrButton = document.getElementById('qrBtn');

    // --- Elemen Modal QR Code ---
    const modal = document.getElementById('qrModal');
    const closeModalBtn = document.getElementById('closeModal');
    const qrCanvas = document.getElementById('qrCanvas');

    // --- Elemen Modal Edit Data ---
    const editModal = document.getElementById('editModal');
    const closeEditModalBtn = document.getElementById('closeEditModal');
    const editForm = document.getElementById('editForm');
    const editNamaPreview = document.getElementById('editNamaPreview');

    // --- Fungsi Render Data ke Card & QR Preview ---
    function renderData() {
        // Render ke data-grid
        const grid = document.querySelector('.data-grid');
        if (grid) {
            grid.innerHTML = `
                <div class="data-item"><span class="data-label">Nama Lengkap </span><span class="data-value">${childData.nama}</span></div>
                <div class="data-item"><span class="data-label">Jenis Kelamin </span><span class="data-value">${childData.jenis_kelamin}</span></div>
                <div class="data-item"><span class="data-label">Nomor Induk Kependudukan (NIK) </span><span class="data-value">${childData.nik}</span></div>
                <div class="data-item"><span class="data-label">Tanggal Lahir </span><span class="data-value">${formatTanggal(childData.tgl_lahir)}</span></div>
                <div class="data-item"><span class="data-label">Nomor JKN </span><span class="data-value">${childData.jkn}</span></div>
                <div class="data-item"><span class="data-label">Anak ke </span><span class="data-value">${childData.anak_ke}</span></div>
                <div class="data-item"><span class="data-label">Golongan Darah </span><span class="data-value">${childData.gol_darah}</span></div>
                <div class="data-item"><span class="data-label">No. Registrasi Kohort </span><span class="data-value">${childData.registrasi_kohort}</span></div>
                <div class="data-item"><span class="data-label">Nama Ibu </span><span class="data-value">${childData.ibu}</span></div>
            `;
        }
        // Render ke QR preview
        const qrPreview = document.querySelector('.qr-data-preview');
        if (qrPreview) {
            qrPreview.innerHTML = `
                <strong>Nama:</strong> ${childData.nama}<br>
                <strong>Tgl Lahir:</strong> ${formatTanggal(childData.tgl_lahir)}<br>
                <strong>Gol. Darah:</strong> ${childData.gol_darah}<br>
                <strong>JKN:</strong> ${childData.jkn}<br>
                <strong>NIK:</strong> ${childData.nik}<br>
                <strong>Anak ke:</strong> ${childData.anak_ke}<br>
                <strong>Registrasi Kohort:</strong> ${childData.registrasi_kohort}<br>
                <strong>Ibu:</strong> ${childData.ibu}
            `;
        }
    }

    function formatTanggal(tgl) {
        // Format yyyy-mm-dd ke dd MMM yyyy
        const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
        const [y, m, d] = tgl.split("-");
        return `${d} ${bulan[parseInt(m)-1]} ${y}`;
    }

    // --- Modal Edit Data ---
    if (editButton) {
        editButton.addEventListener('click', function() {
            if (editModal && editForm) {
                // Isi form dengan data sekarang
                editForm.nama.value = childData.nama;
                editForm.nik.value = childData.nik;
                editForm.jenis_kelamin.value = childData.jenis_kelamin;
                editForm.tgl_lahir.value = childData.tgl_lahir;
                editForm.jkn.value = childData.jkn;
                editForm.anak_ke.value = childData.anak_ke;
                editForm.gol_darah.value = childData.gol_darah;
                editForm.registrasi_kohort.value = childData.registrasi_kohort;
                editForm.ibu.value = childData.ibu;
                if (editNamaPreview) editNamaPreview.textContent = childData.nama;
                editModal.style.display = 'flex';
            }
        });
    }
    if (closeEditModalBtn) {
        closeEditModalBtn.addEventListener('click', function() {
            editModal.style.display = 'none';
        });
    }
    if (editModal) {
    editModal.addEventListener('click', function(event) {
        if (event.target === editModal) {
            editModal.style.display = 'none';
        }
    });
}
    if (editForm) {
        editForm.addEventListener('input', function() {
            if (editNamaPreview) editNamaPreview.textContent = editForm.nama.value;
        });
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simpan perubahan ke childData dan localStorage
            childData = {
                nama: editForm.nama.value,
                nik: editForm.nik.value,
                jenis_kelamin: editForm.jenis_kelamin.value,
                tgl_lahir: editForm.tgl_lahir.value,
                jkn: editForm.jkn.value,
                anak_ke: editForm.anak_ke.value,
                gol_darah: editForm.gol_darah.value,
                registrasi_kohort: editForm.registrasi_kohort.value,
                ibu: editForm.ibu.value
            };
            localStorage.setItem('childData', JSON.stringify(childData));
            renderData();
            editModal.style.display = 'none';
        });
    }

    // --- Modal QR Code ---
    function openModal() {
        if (modal) {
            // Generate QR Code dari data terbaru
            const dataString = JSON.stringify(childData);
            if (qrCanvas && window.QRCode) {
                window.QRCode.toCanvas(qrCanvas, dataString, {
                    width: 220,
                    margin: 2,
                    errorCorrectionLevel: 'H'
                }, function (error) {
                    if (error) console.error(error);
                });
            }
            modal.style.display = 'flex';
            renderData();
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
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // --- Render data awal ---
    renderData();
});