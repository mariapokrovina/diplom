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
            name: "Дмитрий Буланов",
            position: "Педагог направлений<br>Основы программирования на Java<br>Мобильная разработка на языке Kotlin<br>Основы программирования на языке Python",
            photo: "teacher_1.png"
        },
        {
            name: "Сергей Гергель",
            position: "Педагог направлений<br>Киберспорт",
            photo: "teacher_5.png"
        },
        {
            name: "Яна Горшколепова",
            position: "Педагог направлений<br>Основы компьютерной грамотности и безопасности<br>Разработка игр Kodu Game Lab",
            photo: "teacher_7.png"
        },
        {
            name: "Саидбек Давранбеков",
            position: "Педагог направлений<br>Web-разработка с кодом",
            photo: "teacher_8.png"
        },
        {
            name: "Максим Домрин",
            position: "Педагог направлений<br>Кибербезопасность",
            photo: "teacher_6.png"
        },
        {
            name: "Кирилл Засыпкин",
            position: "Педагог студии детского телевидения<br>ТелеРовесник",
            photo: "teacher_9.png"
        },
        {
            name: "Владислав Каламбет",
            position: "Педагог направлений<<br>Web-разработка с кодом",
            photo: "teacher_10.png"
        },
        {
            name: "Евгений Ковальцов",
            position: "Педагог направлений<br>Робототехника<br>Робоспорт<br>Спортивная робототехника",
            photo: "teacher_11.png"
        },
        {
            name: "Марина Крамаренко",
            position: "Педагог направлений<br>Введение в программирование<br>Основы конструирования",
            photo: "teacher_5.png"
        },
        {
            name: "Ксения Криводанова",
            position: "Педагог направлений<br>Основы программирования на Scratch<br>Введение в программирование<br>Основы программирования",
            photo: "teacher_5.png"
        },
        {
            name: "Оксана Лагутина",
            position: "Педагог направлений<br>Основы компьютерной грамотности и безопасности",
            photo: "teacher_4.png"
        },
        {
            name: "Инна Ливанцова",
            position: "Педагог  студии детского телевидения<br>ТелеРовесник",
            photo: "teacher_5.png"
        },
        {
            name: "Егор Литвинов",
            position: "Педагог направлений<br>Введение в программирование<br>Введение в программирование на Python",
            photo: "teacher_13.png"
        },
        {
            name: "Илья Лошкарёв",
            position: "Педагог направлений<br>Основы программирования на языке Python",
            photo: "teacher_14.png"
        },
        {
            name: "Александр Меркулов",
            position: "Педагог направлений<br>Робототехника<br>Основы компьютерной графики",
            photo: "teacher_5.png"
        },
        {
            name: "Анна Носкова",
            position: "Педагог направлений<br>C++",
            photo: "teacher_15.png"
        },
        {
            name: "Владимир Обухов",
            position: "Педагог направлений<br>Разработка VR/AR приложений",
            photo: "teacher_16.png"
        },
        {
            name: "Мария Покровина",
            position: "Педагог направлений<br>Основы программирования Python<br>Основы компьютерной графики",
            photo: "teacher_17.png"
        },
        {
            name: "Роман Пошибайло",
            position: "Педагог направлений<br>3-Д моделирование",
            photo: "teacher_5.png"
        },
        {
            name: "Ольга Пусева",
            position: "Педагог направлений<br>Основы промышленного программирования",
            photo: "teacher_18.png"
        },
        {
            name: "Сергей Сулавко",
            position: "Педагог направлений<br>Практическая разработка на Unity<br>Основы программирования Python",
            photo: "teacher_19.png"
        },
        {
            name: "Алия Уразгильдеева",
            position: "Педагог направлений<br>Пиктомир",
            photo: "teacher_5.png"
        },
        {
            name: "Камилла Уразгильдеева",
            position: "Педагог направлений<br>Медиа-менеджмент(SMM)<br>Нейросети",
            photo: "teacher_5.png"
        },
        {
            name: "Дарья Харина",
            position: "Педагог направлений<br>Web-разработка без кода",
            photo: "teacher_20.png"
        },
        {
            name: "Никита Шаповалов",
            position: "Педагог направлений<br>Web-разработка без кода",
            photo: "teacher_21.png"
        },
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