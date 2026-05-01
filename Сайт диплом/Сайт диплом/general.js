// script.js - Главная страница IT-КУБ

document.addEventListener('DOMContentLoaded', () => {

    // Данные для галереи детей
    const photos = [
        'фото.png',
        'L (4).webp',
        'L (1).webp',
        'L (9).webp',
        'L (10).webp'
    ];

    // Данные для галереи помещений
    const roomsPhotos = [
        'pomeshenia_general/Помещение1.webp',
        'pomeshenia_general/Помещение 2.webp',
        'pomeshenia_general/Помещение 3.webp',
        'pomeshenia_general/Помещение 4.webp',
        'pomeshenia_general/Помещение 5.webp'
    ];

    // Инициализация галерей
    initGallery('galleryContainer', 'prevButton', 'nextButton', 'currentPhoto', 'totalPhotos', photos, 3);
    initGallery('roomsGalleryContainer', null, null, 'current-room', 'total-rooms', roomsPhotos, 3, 
                document.querySelector('.prev-room'), document.querySelector('.next-room'));
});

/**
 * Универсальная функция инициализации галереи
 */
function initGallery(containerId, prevBtnId, nextBtnId, currentClass, totalClass, photosArray, photosPerView, customPrev = null, customNext = null) {
    const container = document.getElementById(containerId);
    const prevBtn = customPrev || document.getElementById(prevBtnId);
    const nextBtn = customNext || document.getElementById(nextBtnId);
    const currentSpan = document.querySelector(`.${currentClass}`) || document.getElementById(currentClass);
    const totalSpan = document.querySelector(`.${totalClass}`) || document.getElementById(totalClass);

    if (!container || !prevBtn || !nextBtn || !currentSpan || !totalSpan) {
        console.warn(`Галерея ${containerId} не инициализирована: отсутствуют элементы`);
        return;
    }

    let currentPosition = 0;
    const totalPositions = Math.max(1, photosArray.length - photosPerView + 1);
    totalSpan.textContent = totalPositions;

    function updateGallery() {
        container.innerHTML = '';
        const end = Math.min(currentPosition + photosPerView, photosArray.length);

        for (let i = currentPosition; i < end; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = photosArray[i];
            img.alt = `Фото ${i + 1}`;
            img.className = 'gallery-photo';

            img.onerror = () => {
                img.src = 'https://via.placeholder.com/400x300?text=Фото+не+найдено';
            };

            item.appendChild(img);
            container.appendChild(item);
        }

        currentSpan.textContent = currentPosition + 1;
        updateButtons();
    }

    function updateButtons() {
        prevBtn.style.opacity = currentPosition === 0 ? '0.4' : '1';
        nextBtn.style.opacity = currentPosition >= totalPositions - 1 ? '0.4' : '1';
    }

    function goNext() {
        currentPosition = (currentPosition + 1) % totalPositions;
        updateGallery();
    }

    function goPrev() {
        currentPosition = (currentPosition - 1 + totalPositions) % totalPositions;
        updateGallery();
    }

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);

    // Автопрокрутка
    let autoplay = setInterval(goNext, 5000);

    container.addEventListener('mouseenter', () => clearInterval(autoplay));
    container.addEventListener('mouseleave', () => autoplay = setInterval(goNext, 5000));

    // Инициализация
    updateGallery();
};