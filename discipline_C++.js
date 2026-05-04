const backButton = document.querySelector('.back-button');
if (backButton) {
    backButton.addEventListener('click', function(e) {
        e.preventDefault(); // Блокируем стандартное поведение
        
        // Пытаемся вернуться назад
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // Если истории нет — переходим на главную страницу направлений
            window.location.href = 'discipline.html';
        }
    });
}