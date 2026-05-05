/// ====================== СТРАНИЦА НОВОСТИ ======================

function initNewsPage() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    // ==================== ДАННЫЕ НОВОСТЕЙ ====================
    const newsData = [
        {
            link: "new_10.04.2026.html",                    
            title: "IT-Олимпиада в Кубе",
            description: "Друзья, у нас отличные новости! Центр цифрового образования детей IT-куб открывает регистрацию на ежегодную IT-олимпиаду...",
            date: "10.04.2026",
            image: "new_10.04.2026.webp"
        },
        {
            link: "new_23.03.2026.html",
            title: "🚀 КИБЕРБИТВА В IT-КУБЕ!",
            description: "Центр цифрового образования детей «IT-Куб» приглашает на командный кибертурнир по Rocket League...",
            date: "23.03.2026",
            image: "new_23.03.2026.webp"
        },
        {
            link: "new_11.02.2026.html",
            title: "Регистрация на хакатон «devHACK»#6 открыта!",
            description: "Готов к самому технологичному вызову этой зимы? Регистрация на хакатон «devHACK»#6 открыта!",
            date: "11.02.2026",
            image: "new_11.02.2026.webp"
        },
        {
            link: "new_03.02.2026.html",
            title: "Экскурсия для детского сада номер 50",
            description: "В прошлую пятницу, 30 января, любознательные дошкольники из детского сада № 50 совершили удивительное путешествие...",
            date: "03.02.2026",
            image: "new_03.02.2026.webp"
        },
        {
            link: "new_20.01.2026.html",
            title: "Объявляем старт мероприятию Клавагонки - 2.",
            description: "Что такое Клавагонки? Это увлекательное соревнование по скоростной печати на клавиатуре...",
            date: "20.01.2026",
            image: "new_20.01.2026.webp"
        },
        {
            link: "new_18.12.2025.html",
            title: "Новогодняя IT-открытка в IT-Кубе",
            description: "Как поздравить с Новым годом по-настоящему креативно? В Центре цифрового образования детей IT-Куб мы создаём новогодние IT-открытки...",
            date: "18.12.2025",
            image: "new_18.12.2025.webp"
        },
        {
            link: "new_08.12.2025.html",
            title: "Кибертурнир по CS2",
            description: "6 декабря в киберспортивном клубе «Runa» состоялся турнир по дисциплине Counter-Strike 2...",
            date: "08.12.2025",
            image: "new_08.12.2025.webp"
        }
    ];

    grid.innerHTML = '';

    newsData.forEach(news => {
        const cardHTML = `
            <!-- Кликабельная карточка новости -->
            <!-- При клике на карточку пользователь перейдёт по ссылке: ${news.link} -->
            <a href="${news.link}" class="news-card-link">
                <div class="news-card">
                    <div class="news-image">
                        <!-- ИЗОБРАЖЕНИЕ: Фото новости -->
                        <img src="${news.image}" 
                             alt="${news.title}"
                             onerror="this.src='https://via.placeholder.com/800x450?text=Фото+новости'">
                    </div>
                    <div class="news-content">
                        <div class="news-badge">
                            <span style="background:#0ea5e9; color:white; padding:4px 12px; border-radius:20px; font-size:14px; font-weight:700;">
                                ${news.title}
                            </span>
                        </div>
                        <h3 class="news-title">${news.description}</h3>
                        <div class="news-date">${news.date}</div>
                    </div>
                </div>
            </a>
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