// panduan.js - Page-Specific Scripts

document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        {
            title: 'Resep MPASI 6 Bulan: Bubur Hati Ayam',
            category: 'nutrisi',
            excerpt: 'Tingkatkan asupan zat besi si kecil dengan resep bubur hati ayam yang lezat dan mudah dibuat. Penting untuk mencegah anemia.',
            tags: ['mpasi', 'resep', '6 bulan', 'zat besi', 'protein hewani', 'hati ayam']
        },
        {
            title: 'Panduan Stimulasi Sensorik untuk Bayi 3-6 Bulan',
            category: 'stimulasi',
            excerpt: 'Ajak bayi bermain dengan mainan bertekstur, mendengarkan musik lembut, dan melakukan "tummy time" untuk merangsang perkembangan otaknya.',
            tags: ['stimulasi', 'sensorik', 'motorik', '3 bulan', '6 bulan', 'tummy time']
        },
        {
            title: 'Cara Menangani Demam pada Anak',
            category: 'kesehatan',
            excerpt: 'Kenali kapan demam menjadi berbahaya. Kompres dengan air hangat dan pastikan anak cukup cairan. Jangan berikan aspirin.',
            tags: ['kesehatan', 'demam', 'panas', 'sakit', 'obat', 'pertolongan pertama']
        },
        {
            title: 'Pentingnya Gizi Seimbang dalam 1000 Hari Pertama',
            category: 'nutrisi',
            excerpt: '1000 Hari Pertama Kehidupan (HPK) adalah jendela emas. Pastikan asupan makro dan mikronutrien seimbang untuk fondasi kesehatan.',
            tags: ['nutrisi', 'gizi', '1000 hpk', 'asi', 'mpasi']
        },
        {
            title: 'Mengenali Tanda Bahaya Dehidrasi pada Balita',
            category: 'kesehatan',
            excerpt: 'Mata cekung, jarang buang air kecil, dan lemas adalah tanda dehidrasi. Segera berikan oralit dan cari pertolongan medis jika memburuk.',
            tags: ['kesehatan', 'diare', 'muntah', 'dehidrasi', 'tanda bahaya', 'oralit']
        },
        {
            title: 'Stimulasi Motorik Kasar untuk Usia 1 Tahun',
            category: 'stimulasi',
            excerpt: 'Dorong anak untuk berdiri, berjalan berpegangan, dan melempar bola untuk melatih otot-otot besarnya.',
            tags: ['stimulasi', 'motorik kasar', '1 tahun', '12 bulan', 'berjalan']
        }
    ];

    const articlesContainer = document.getElementById('articles-container');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const notFoundMessage = document.getElementById('not-found');

    function renderArticles(filteredArticles) {
        articlesContainer.innerHTML = ''; // Kosongkan kontainer
        
        if (filteredArticles.length === 0) {
            notFoundMessage.style.display = 'block';
        } else {
            notFoundMessage.style.display = 'none';
        }

        filteredArticles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML = `
                <span class="category-tag ${article.category}">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
            `;
            articlesContainer.appendChild(card);
        });
    }

    function filterAndSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        const filteredArticles = articles.filter(article => {
            const inCategory = activeCategory === 'all' || article.category === activeCategory;
            const inSearch = query === '' || 
                             article.title.toLowerCase().includes(query) || 
                             article.tags.some(tag => tag.toLowerCase().includes(query));
            return inCategory && inSearch;
        });

        renderArticles(filteredArticles);
    }

    // Event listener untuk bar pencarian
    searchInput.addEventListener('input', filterAndSearch);

    // Event listener untuk tombol filter kategori
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAndSearch();
        });
    });

    // Render semua artikel saat halaman pertama kali dimuat
    renderArticles(articles);
});