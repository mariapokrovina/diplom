// ====================== СТРАНИЦА НАПРАВЛЕНИЯ ======================

function initDirectionsPage() {
    const grid = document.getElementById('directionsGrid');
    if (!grid) return;

    // ==================== ИНДИВИДУАЛЬНЫЕ НАПРАВЛЕНИЯ ====================
    const directionsData = [
        {
            title: "Пиктомир",
            age: "6-7 лет",
            duration: "9 месяцев",
            description: "Бестекстовая цифровая образовательная среда «ПиктоМир», разработанная для погружения дошкольников и младших школьников в современное программирование",
            image: "piktomir.png",
            link: "discipline_piktomir.html"                    // ← Ссылка на отдельную страницу
        },
        {
            title: "Разработка игр Kodu Game Labа",
            age: "6-8 лет",
            duration: "9 месяцев",
            description: "Этот курс знакомит учащихся с основами создания 3D-игр в визуальной среде Kodu Game Lab — простом и удобном инструменте для начинающих гейм-дизайнеров. Все настолько просто и интуитивно понятно, что освоить Kodu сможет даже первоклассник.",
            image: "img_course_kodu.png",
            link: "discipline_kodu.html"
        },
        {
            title: "Основы конструирования",
            age: "6-8 лет",
            duration: "9 месяцев",
            description: "Этот курс знакомит учащихся с базовыми принципами инженерного проектирования, механики и робототехники, развивая логическое мышление и техническую креативность. Введение в конструирование, Создание механических моделей, Основы робототехники и Решение инженерных задач.",
            image: "konstructor.png",
            link: "discipline_konstructor.html"
        },
        {
            title: "Основы компьютерной грамотности и безопасности",
            age: "7-8 лет",
            duration: "9 месяцев",
            description: "Формирование базовых знаний при работе на компьютере и интернет-безопасности",
            image: "komp_gramotnost.png",
            link: "komp_gramotnost.html"
        },
        {
            title: "Робототехника, Робоспорт, Спортивная робототехника",
            age: " 8-11 лет",
            duration: "9 месяцев",
            description: "Курс развивает логику и техническое мышление через сборку и программирование робототехнических моделей. Практические задания включают создание подвижных механизмов и решение игровых задач.",
            image: "robotosport.jpg",
            link: "discipline_robotosport.html"
        },
        {
            title: "Введение в программирование",
            age: "10-12 лет",
            duration: "9 месяцев",
            description: "Базовые навыки программирования на Scratch подобных языках",
            image: "vedenie_v_programmirovanie.jpg",
            link: "discipline_vedenie_v_programmirovanie.html"
        },
        {
            title: "Программирование на Scratch",
            age: "11-13 лет",
            duration: "9 месяцев",
            description: "Курс предназначен для начинающих и детей, которые хотят освоить основы программирования в увлекательной визуальной среде. Знакомство со Scratch, Основы алгоритмизации, Создание игр и мультфильмов и Интерактивные проекты.",
            image: "scratch.jpg",
            link: "discipline_scratch.html"
        },
        {
            title: "Компьютерная графика",
            age: "11-13 лет",
            duration: "9 месяцев",
            description: "Программа рассчитана на детей, проявляющих интерес к современным компьютерным технологиям. Курс знакомит учащихся с основами создания и обработки цифровых изображений, 2D/3D-моделирования и анимации.",
            image: "komp_graphika.jpg",
            link: "komp_graphika.html"
        },
        {
            title: "3D - моделирование",
            age: "11-13 лет",
            duration: "9 месяцев",
            description: "3D – моделирование одно из самых востребованных направлений IT – сферы. Метод трехмерного моделирования широко распространен в игровой индустрии, кино и анимации, робототехнике, архитектуре, дизайне и строительстве.",
            image: "3d.png",
            link: "discipline_3d.html"
        },
        {
            title: "Кибербезопасность",
            age: "12-15 лет",
            duration: "9 месяцев",
            description: "Безопасность пользователей в цифровом пространстве",
            image: "cybersecurity.jpg",
            link: "discipline_cybersecurity.html"
        },
        {
            title: "Введение в программирование на Python (базовый уровень)",
            age: "13-16 лет",
            duration: "9 месяцев",
            description: "Изучение основ программирования на языке Python, развитие алгоритмического мышления учащихся и творческих способностей.",
            image: "osnovi_python.jpg",
            link: "discipline_osnovi_python.html"
        },
        {
            title: "Разработка VR/AR приложений",
            age: "14-18 лет",
            duration: "9 месяцев",
            description: "Этот курс идеально подходит для тех, кто хочет погрузиться в увлекательный мир виртуальной и дополненной реальности. На занятиях ребята познакомятся с основами разработки приложений в популярном игровом движке Unity 3D, изучат принципы создания VR/AR-контента и смогут воплотить свои идеи в жизнь.",
            image: "vr_ar.png",
            link: "discipline_vr_ar.html"
        },
        {
            title: "Основы программирования на Python (углубленный уровень, Программа Яндекс.Лицей, двухгодичный курс)",
            age: "14-18 лет",
            duration: "18 месяцев",
            description: "По окончании полного курса обучения школьники будут иметь навыки, достаточные для работы младшим разработчиком или стажёром.",
            image: "Litsey_yandex.jpg",
            link: "discipline_Litsey_yandex.html"
        },
        {
            title: "Мобильная разработка Android приложений на языке Kotlin",
            age: "14-18 лет",
            duration: "9 месяцев",
            description: "Разработка на языке Kotlin для платформы Android",
            image: "kotlin.jpg",
            link: "discipline_kotlin.html"
        },
        {
            title: "С++, базовый курс",
            age: "15-17 лет",
            duration: "9 месяцев",
            description: "Изучение основ программирования на C++ и работы с библиотекой SFML, а также создание собственного проекта от идеи до реализации.",
            image: "C++.jpg",
            link: "discipline_C++.html"
        },
        {
            title: "Web разработка (С кодом)",
            age: "14-17 лет",
            duration: "9 месяцев",
            description: "Основы программирования на JavaScript и основы веб-верстки с помощью HTML и CSS.",
            image: "web_1.jpg",
            link: "discipline_web_1.html"
        },
        {
            title: "Web разработка (Без кода)",
            age: "14-17 лет",
            duration: "9 месяцев",
            description: "Создание собственного сайта или лендинг страницы без необходимости знания программирования. Основные принципы работы с конструктором Tilda.",
            image: "web_2.png",
            link: "discipline_web_2.html"
        },
        {
            title: "Детское телевидение ТелеРовесник",
            age: "13-17 лет",
            duration: "9 месяцев",
            description: "Детское телевидение ТелеРовесник",
            image: "telerovesnik.png",
            link: "discipline_telerovesnik.html"
        },
    ];

    grid.innerHTML = '';

    directionsData.forEach((course, index) => {
        const cardHTML = `
            <a href="${course.link}" class="direction-card-link">
                <div class="direction-card">
                    <div class="card-image">
                        <!-- ИЗОБРАЖЕНИЕ: Уникальное фото для каждого направления -->
                        <img src="${course.image}" 
                             alt="${course.title}"
                             onerror="this.src='https://via.placeholder.com/600x400/1E88E5/FFFFFF?text=${encodeURIComponent(course.title)}'">
                    </div>
                    <div class="card-content">
                        <h3>${course.title}</h3>
                        <div class="card-info">
                            <p><strong>Возраст:</strong> ${course.age}</p>
                            <p><strong>Срок обучения:</strong> ${course.duration}</p>
                            <p class="course-description">${course.description}</p>
                        </div>
                        <span class="btn-more">Подробнее</span>
                    </div>
                </div>
            </a>
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
}

// Автозапуск
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.directions-section')) {
        initDirectionsPage();
    }
});