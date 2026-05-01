// ====================== СТРАНИЦА ОТДЕЛЬНОГО НАПРАВЛЕНИЯ ======================

document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление контента
    const directionContent = document.querySelector('.direction-content');
    if (directionContent) {
        directionContent.style.opacity = '0';
        directionContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            directionContent.style.transition = 'all 0.8s ease';
            directionContent.style.opacity = '1';
            directionContent.style.transform = 'translateY(0)';
        }, 150);
    }

    // Обработка кнопки "Назад"
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            // Если история браузера пустая — перенаправляем на страницу направлений
            if (window.history.length <= 1) {
                e.preventDefault();
                window.location.href = 'directions.html';
            }
        });
    }

    console.log('Страница направления "Пиктомир" загружена');
});