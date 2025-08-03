// perkembangan.js - Page-Specific Scripts

document.addEventListener('DOMContentLoaded', function () {
    const milestones = {
        '3mo': {
            title: 'Penanda Perkembangan Usia 3 Bulan',
            items: [
                'Mengangkat kepala setinggi 45 derajat',
                'Menggerakkan kepala dari kiri/kanan ke tengah',
                'Melihat dan menatap wajah Anda',
                'Bereaksi terhadap suara/lonceng',
                'Mengoceh spontan atau bereaksi dengan mengoceh'
            ]
        },
        '6mo': {
            title: 'Penanda Perkembangan Usia 6 Bulan',
            items: [
                'Berbalik dari telungkup ke telentang',
                'Mempertahankan posisi kepala tetap tegak dan stabil',
                'Meraih benda yang ada dalam jangkauannya',
                'Menirukan bunyi',
                'Tersenyum ketika melihat mainan/gambar yang menarik'
            ]
        },
        '9mo': {
            title: 'Penanda Perkembangan Usia 9 Bulan',
            items: [
                'Duduk (sikap tripoid atau tanpa dipegang)',
                'Mencari mainan/benda yang dijatuhkan',
                'Memindahkan benda dari satu tangan ke tangan lainnya',
                'Memungut 2 benda, masing-masing tangan pegang 1 benda',
                'Bersuara "ma..ma..", "ba..ba.." tanpa arti',
                'Meraih mainan yang agak jauh'
            ]
        },
        '12mo': {
            title: 'Penanda Perkembangan Usia 12 Bulan',
            items: [
                'Berdiri dan berjalan berpegangan',
                'Mengulurkan lengan/badan untuk meraih mainan',
                'Menggenggam erat pensil',
                'Membuat 2-3 coretan yang tidak berarti',
                'Menumpuk 2 kubus',
                'Meniru kata',
                'Menyatakan keinginan dengan isyarat'
            ]
        },
        '24mo': {
            title: 'Penanda Perkembangan Usia 2 Tahun',
            items: [
                'Jalan sendiri tanpa jatuh',
                'Naik tangga sendiri',
                'Menumpuk 4 buah kubus',
                'Memungut benda kecil dengan ibu jari dan telunjuk',
                'Mengucapkan kalimat 2 kata',
                'Menunjuk bagian tubuh',
                'Menyebut nama sendiri'
            ]
        }
    };

    const filterButtons = document.querySelectorAll('.age-filter-btn');
    const checklistTitle = document.getElementById('checklist-title');
    const checklistContainer = document.getElementById('checklist-container');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-text');

    function renderChecklist(ageKey) {
        // Hapus checklist lama
        checklistContainer.innerHTML = '';
        const data = milestones[ageKey];
        checklistTitle.textContent = data.title;
        
        // Buat checklist baru
        data.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="item-${index}" name="item-${index}">
                <label for="item-${index}">${item}</label>
            `;
            checklistContainer.appendChild(li);
        });

        // Tambahkan event listener ke checkbox baru
        checklistContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateProgress);
        });
        
        updateProgress(); // Inisialisasi progress bar
    }

    function updateProgress() {
        const checkboxes = checklistContainer.querySelectorAll('input[type="checkbox"]');
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        const totalItems = checkboxes.length;

        checkboxes.forEach(cb => {
            cb.parentElement.classList.toggle('completed', cb.checked);
        });

        const percentage = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;
        progressBarFill.style.width = `${percentage}%`;
        progressText.textContent = `${checkedCount}/${totalItems} Selesai`;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas aktif dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambah kelas aktif ke tombol yang diklik
            button.classList.add('active');
            
            const age = button.getAttribute('data-age');
            renderChecklist(age);
        });
    });

    // Inisialisasi tampilan awal dengan filter pertama
    if (filterButtons.length > 0) {
        filterButtons[0].click();
    }
});