// ====================== СТРАНИЦА ОТДЕЛЬНОЙ НОВОСТИ ======================

// Дополнительная интерактивность (при необходимости)
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');
    
    if (backButton) {
        // Плавный скролл вверх при возврате
        backButton.addEventListener('click', (e) => {
            if (window.history.length > 1) {
                // Можно оставить стандартное поведение
            } else {
                e.preventDefault();
                window.location.href = 'news.html';
            }
        });
    }

    console.log('Страница отдельной новости загружена успешно');
});