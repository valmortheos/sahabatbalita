// imunisasi.js - Page-Specific Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Tanggal lahir anak (bisa diambil dari data user nantinya)
    const birthDate = new Date('2023-05-01T00:00:00');
    
    // Jadwal imunisasi dasar (berdasarkan usia dalam bulan)
    // Untuk simulasi, tambahkan properti `completedOn` pada data yang sudah selesai
    const immunizationSchedule = [
        { ageMonths: 0, name: 'Hepatitis B (HB-0)', completedOn: '2023-05-01' },
        { ageMonths: 1, name: 'BCG, Polio 1', completedOn: '2023-06-05' },
        { ageMonths: 2, name: 'DPT-HB-Hib 1, Polio 2', completedOn: '2023-07-03'},
        { ageMonths: 3, name: 'DPT-HB-Hib 2, Polio 3', completedOn: '2023-08-01'},
        { ageMonths: 4, name: 'DPT-HB-Hib 3, Polio 4, IPV', completedOn: '2023-09-02'},
        { ageMonths: 9, name: 'Campak-Rubela (MR)', completedOn: null }, // Ini akan jadi 'terlewat'
        { ageMonths: 18, name: 'DPT-HB-Hib (Booster)', completedOn: null },
        { ageMonths: 18, name: 'Campak-Rubela (MR) (Booster)', completedOn: null },
        { ageMonths: 24, name: 'PCV (Booster)', completedOn: null },
    ];

    const scheduleBody = document.getElementById('schedule-body');
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalisasi waktu hari ini

    // Fungsi untuk menambah bulan ke tanggal
    function addMonths(date, months) {
        const d = new Date(date);
        d.setMonth(d.getMonth() + months);
        return d;
    }
    
    // Fungsi untuk memformat tanggal ke format 'dd Mmm yyyy'
    function formatDate(date) {
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    immunizationSchedule.forEach(item => {
        const scheduledDate = addMonths(birthDate, item.ageMonths);
        let status = '';
        let statusClass = '';
        
        // Menentukan status
        if (item.completedOn) {
            status = 'Terlaksana';
            statusClass = 'completed';
        } else if (scheduledDate < today) {
            status = 'Terlewat';
            statusClass = 'missed';
        } else {
            status = 'Mendatang';
            statusClass = 'upcoming';
        }
        
        // Membuat baris tabel
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.ageMonths === 0 ? 'Saat Lahir' : item.ageMonths + ' bulan'}</td>
            <td>${item.name}</td>
            <td>${formatDate(scheduledDate)}</td>
            <td class="status-cell">
                <span class="indicator ${statusClass}"></span>
                <span>${status}</span>
            </td>
            <td>
                ${!item.completedOn ? '<button class="action-btn-small">Tandai Selesai</button>' : `Selesai pada ${formatDate(new Date(item.completedOn))}`}
            </td>
        `;
        
        scheduleBody.appendChild(row);
    });

    // Menambahkan event listener ke tombol-tombol (untuk simulasi)
    document.querySelectorAll('.action-btn-small').forEach(button => {
        button.addEventListener('click', () => {
            alert('Fitur ini akan menyimpan tanggal pelaksanaan vaksin.');
        });
    });

});