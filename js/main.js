
// Бургер

const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('nav ul');

burgerIcon.addEventListener('click', () => {
burgerIcon.classList.toggle('active');
navList.classList.toggle('active');
});

// Добавляем обработчик события для изменения фона навигационного меню при скролле
window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
document.querySelector('.navigation').classList.add('scroll');
} else {
document.querySelector('.navigation').classList.remove('scroll');
}
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    document.querySelector('.logo_fon').classList.add('scroll_welcome');
    } else {
    document.querySelector('.logo_fon').classList.remove('scroll_welcome');
    }
    });