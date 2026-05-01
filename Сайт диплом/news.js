// ====================== СТРАНИЦА НОВОСТИ ======================

function initNewsPage() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    // Пример новостей (можно легко расширять)
    const newsData = [
        {
            title: "КЛАВА ГОНКИ 2",
            age: "6-18 ЛЕТ",
            description: "Регистрация на хакатон «devHACK»#6 открыта!",
            date: "20.01.2026",
            image: "https://picsum.photos/id/1015/800/450"   // ← Заменить на реальное фото клавиатуры
        },
        {
            title: "КЛАВА ГОНКИ 2",
            age: "6-18 ЛЕТ",
            description: "Регистрация на хакатон «devHACK»#6 открыта!",
            date: "20.01.2026",
            image: "https://picsum.photos/id/106/800/450"
        },
        {
            title: "КЛАВА ГОНКИ 2",
            age: "6-18 ЛЕТ",
            description: "Регистрация на хакатон «devHACK»#6 открыта!",
            date: "20.01.2026",
            image: "https://picsum.photos/id/201/800/450"
        },
        // Добавьте остальные 6 новостей по аналогии (всего 9 на макете)
        ...Array(6).fill({
            title: "КЛАВА ГОНКИ 2",
            age: "6-18 ЛЕТ",
            description: "Регистрация на хакатон «devHACK»#6 открыта!",
            date: "20.01.2026",
            image: "https://picsum.photos/id/237/800/450"
        })
    ];

    grid.innerHTML = '';

    newsData.forEach((news, index) => {
        const cardHTML = `
            <div class="news-card">
                <div class="news-image">
                    <!-- ИЗОБРАЖЕНИЕ: Тёмная клавиатура с синим подсветом + наложенные элементы (логотип, QR-код) -->
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="news-content">
                    <div class="news-badge">
                        <span style="background:#0ea5e9; color:white; padding:4px 12px; border-radius:20px; font-size:14px; font-weight:700;">
                            ${news.title}
                        </span>
                        <span style="background:#22d3ee; color:#1e3a8a; padding:4px 10px; border-radius:20px; font-size:13px; font-weight:600;">
                            ${news.age}
                        </span>
                    </div>
                    <h3 class="news-title">${news.description}</h3>
                    <div class="news-date">${news.date}</div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    // Плавное появление карточек
    const cards = document.querySelectorAll('.news-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = `all 0.6s ease ${i * 60}ms`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.news-section')) {
        initNewsPage();
    }
});