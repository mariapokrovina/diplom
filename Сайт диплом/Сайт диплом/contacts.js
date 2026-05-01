// ====================== СТРАНИЦА КОНТАКТЫ ======================

document.addEventListener('DOMContentLoaded', () => {

    // Инициализация Яндекс Карты
    function initYandexMap() {
        if (typeof ymaps === 'undefined') return;
        
        ymaps.ready(() => {
            const map = new ymaps.Map('yandex-map', {
                center: [47.2275, 39.7233], // Ростов-на-Дону, Большая Садовая
                zoom: 16
            });

            const placemark = new ymaps.Placemark([47.2275, 39.7233], {
                hintContent: 'IT-Куб',
                balloonContent: 'Большая Садовая 53, Ростов-на-Дону'
            }, {
                preset: 'islands#blueIcon'
            });

            map.geoObjects.add(placemark);
        });
    }

    initYandexMap();

    // Обработка формы
    const form = document.getElementById('feedbackForm');
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            submitBtn.textContent = 'Отправляем...';
            submitBtn.disabled = true;
            messageDiv.style.display = 'none';

            try {
                const response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                messageDiv.textContent = result.message;
                messageDiv.className = `form-message ${result.status}`;
                messageDiv.style.display = 'block';

                if (result.status === 'success') {
                    form.reset();
                }
            } catch (error) {
                messageDiv.textContent = 'Ошибка соединения с сервером. Попробуйте позже.';
                messageDiv.className = 'form-message error';
                messageDiv.style.display = 'block';
            } finally {
                submitBtn.textContent = 'Отправить';
                submitBtn.disabled = false;
            }
        });
    }
});