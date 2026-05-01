// ====================== СТРАНИЦА НАПРАВЛЕНИЯ ======================

function initDirectionsPage() {
    const grid = document.getElementById('directionsGrid');
    if (!grid) return;

    // Данные для 12 карточек (как на макете)
    const courses = Array(12).fill({
        title: "Пиктомир",
        age: "6-7 лет",
        duration: "9 мес"
    });

    grid.innerHTML = '';

    courses.forEach((course, index) => {
        const cardHTML = `
            <div class="direction-card">
                <div class="card-image">
                    <!-- ИЗОБРАЖЕНИЕ: Иллюстрация мальчика с роботом Пиктомир (одинаковая для всех карточек) -->
                    <img src="https://via.placeholder.com/600x400/1E88E5/FFFFFF?text=Пиктомир" 
                         alt="Пиктомир - программирование для детей">
                </div>
                <div class="card-content">
                    <h3>${course.title}</h3>
                    <div class="card-info">
                        <p><strong>Возраст:</strong> ${course.age}</p>
                        <p><strong>Срок обучения:</strong> ${course.duration}</p>
                    </div>
                    <a href="#" class="btn-more">Подробнее</a>
                </div>
            </div>
        `;

        grid.innerHTML += cardHTML;
    });

    // Плавное появление карточек
    const cards = document.querySelectorAll('.direction-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        
        setTimeout(() => {
            card.style.transition = `all 0.7s ease ${i * 50}ms`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 80);
    });

    // Обработчик кнопки "Подробнее"
    grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-more')) {
            e.preventDefault();
            alert('Подробная информация о направлении "Пиктомир" открывается здесь.\n\nМожно подключить модальное окно.');
        }
    });
}

// Автозапуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.directions-section')) {
        initDirectionsPage();
    }
});