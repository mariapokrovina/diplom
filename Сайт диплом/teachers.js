// ====================== СТРАНИЦА ПЕДАГОГИ ======================

function createTeamCard(person) {
    return `
        <div class="team-card">
            <div class="team-image">
                <!-- ИЗОБРАЖЕНИЕ: Фото педагога -->
                <img src="${person.photo}" 
                     alt="${person.name}"
                     onerror="this.src='https://via.placeholder.com/300x300/e0f0ff/1C75BC?text=Фото'">
            </div>
            <div class="team-info">
                <div class="team-name">${person.name}</div>
                <div class="team-position">
                    ${person.position}
                </div>
            </div>
        </div>
    `;
}

function initTeamPage() {
    const adminGrid = document.getElementById('adminGrid');
    const teachersGrid = document.getElementById('teachersGrid');

    if (!adminGrid || !teachersGrid) return;

    // ==================== АДМИНИСТРАЦИЯ ЦЕНТРА ====================
    const admins = [
        {
            name: "Дмитрий Буланов",
            position: "Заведующий",
            photo: "teacher_1.png"
        },
        {
            name: "Елена Букатова",
            position: "Старший методист",
            photo: "teacher_2.png"
        },
        {
            name: "Алия Уразгильдеева",
            position: "Старший методист",
            photo: "teacher_3.png"
        },
        {
            name: "Оксана Лагутина",
            position: "Методист",
            photo: "teacher_4.png"
        },
        {
            name: "Максим Домрин",
            position: "Методист",
            photo: "teacher_6.png"
        },
        {
            name: "Виктория Скобелина",
            position: "Лаборант",
            photo: "teacher_5.png"
        }
        // Добавляйте остальных администраторов
    ];

    // ==================== ПЕДАГОГИЧЕСКИЙ СОСТАВ ====================
    const teachers = [
        {
            name: "Смирнова Екатерина Викторовна",
            position: "Педагог<br>Пиктомир",
            photo: "teachers/smirnova.jpg"
        },
        {
            name: "Кузнецов Дмитрий Олегович",
            position: "Педагог<br>Робототехника",
            photo: "teachers/kuznetsov.jpg"
        },
        {
            name: "Васильева Ольга Сергеевна",
            position: "Педагог<br>Программирование на Scratch",
            photo: "teachers/vasileva.jpg"
        },
        {
            name: "Морозов Алексей Николаевич",
            position: "Педагог<br>3D-моделирование",
            photo: "teachers/morozov.jpg"
        },
        {
            name: "Лебедева Мария Андреевна",
            position: "Педагог<br>Пиктомир",
            photo: "teachers/lebedeva.jpg"
        },
        {
            name: "Фёдоров Павел Игоревич",
            position: "Педагог<br>Робототехника, Arduino",
            photo: "teachers/fedorov.jpg"
        },
        {
            name: "Попова Анастасия Дмитриевна",
            position: "Педагог<br>Визуальное программирование",
            photo: "teachers/popova.jpg"
        },
        {
            name: "Соколов Игорь Владимирович",
            position: "Педагог<br>Кибербезопасность",
            photo: "teachers/sokolov.jpg"
        },
        {
            name: "Ковалёва Дарья Александровна",
            position: "Педагог<br>Пиктомир",
            photo: "teachers/kovaleva.jpg"
        }
    ];

    // Заполняем администрацию
    adminGrid.innerHTML = admins.map(person => createTeamCard(person)).join('');

    // Заполняем педагогический состав
    teachersGrid.innerHTML = teachers.map(person => createTeamCard(person)).join('');

    // Плавное появление карточек
    const allCards = document.querySelectorAll('.team-card');
    allCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = `all 0.6s ease ${index * 50}ms`;
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