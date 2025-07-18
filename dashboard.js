// dashboard.js - Page-Specific Scripts

document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah elemen canvas ada di halaman
    if (document.getElementById('growthChart')) {
        const ctx = document.getElementById('growthChart').getContext('2d');

        // Data dummy untuk grafik pertumbuhan
        const labels = ['Lahir', '1bln', '2bln', '3bln', '4bln', '5bln', '6bln', '7bln', '8bln', '9bln', '10bln', '11bln', '12bln'];
        const childData = [3.3, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.4, 8.6, 8.9]; // Data anak (contoh)
        const standardCurve = [3.3, 4.5, 5.6, 6.4, 7.0, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6]; // Kurva standar (median WHO)

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Berat Badan Arka (kg)',
                        data: childData,
                        borderColor: '#7A9E9F', // accent-boy
                        backgroundColor: '#7A9E9F',
                        tension: 0.3,
                        borderWidth: 3,
                        pointRadius: 5,
                        pointBackgroundColor: '#FAF8F5',
                        pointBorderColor: '#7A9E9F',
                    },
                    {
                        label: 'Standar Pertumbuhan (Median)',
                        data: standardCurve,
                        borderColor: '#D1C1A5', // secondary-color
                        backgroundColor: '#D1C1A5',
                        borderDash: [5, 5], // Garis putus-putus
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 0, // Sembunyikan titik
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Berat Badan (kg)'
                        }
                    },
                    x: {
                         title: {
                            display: true,
                            text: 'Usia (Bulan)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
    }
});