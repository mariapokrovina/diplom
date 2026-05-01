// ====================== СТРАНИЦА "ЗАПИСЬ" ======================

document.addEventListener('DOMContentLoaded', () => {
    const enrollSection = document.querySelector('.enroll-section');
    
    if (enrollSection) {
        // Плавное появление большого блока
        const hero = document.querySelector('.enroll-hero');
        if (hero) {
            hero.style.opacity = '0';
            hero.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                hero.style.transition = 'all 1s ease';
                hero.style.opacity = '1';
                hero.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    console.log('Страница "Запись" загружена');
});