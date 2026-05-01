// ====================== СТРАНИЦА ПЕДАГОГИ ======================

function createTeamCard(name, directions) {
    return `
        <div class="team-card">
            <div class="team-image">
                <!-- ИЗОБРАЖЕНИЕ: Фото педагога (квадратное или прямоугольное) -->
                <img src="https://via.placeholder.com/300x300/e0f0ff/1C75BC?text=Фото" 
                     alt="${name}">
            </div>
            <div class="team-info">
                <div class="team-name">${name}</div>
                <div class="team-position">
                    ${directions.join('<br>')}
                </div>
            </div>
        </div>
    `;
}

function initTeamPage() {
    const adminGrid = document.getElementById('adminGrid');
    const teachersGrid = document.getElementById('teachersGrid');

    if (!adminGrid || !teachersGrid) return;

    // Администрация центра (6 человек)
    const admins = [
        { name: "Иванов Иван Иванович", directions: ["Пиктомир", "Робототехника"] },
        { name: "Иванов Иван Иванович", directions: ["Пиктомир", "Робототехника"] },
        { name: "Иванов Иван Иванович", directions: ["Пиктомир", "Робототехника"] },
        { name: "Иванов Иван Иванович", directions: ["Пиктомир", "Робототехника"] },
        { name: "Иванов Иван Иванович", directions: ["Пиктомир", "Робототехника"] }
    ];

    // Педагогический состав (9 человек)
    const teachers = Array(9).fill({
        name: "Иванов Иван Иванович",
        directions: ["Пиктомир", "Робототехника"]
    });

    // Заполняем администрацию
    adminGrid.innerHTML = admins.map(admin => 
        createTeamCard(admin.name, admin.directions)
    ).join('');

    // Заполняем педагогический состав
    teachersGrid.innerHTML = teachers.map(teacher => 
        createTeamCard(teacher.name, teacher.directions)
    ).join('');

    // Плавное появление карточек
    const allCards = document.querySelectorAll('.team-card');
    allCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = `all 0.6s ease ${index * 40}ms`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.team-section')) {
        initTeamPage();
    }
});