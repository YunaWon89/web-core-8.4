
const toggleBtn = document.getElementById('toggleBtn');
const wrapper = document.querySelector('.swiper-wrapper'); // Контейнер с карточками
const btnText = toggleBtn.querySelector('.text');

toggleBtn.addEventListener('click', function() {
    // Переключаем класс 'opened' у обертки
    wrapper.classList.toggle('opened');
   
    // Добавляем класс 'active' самой кнопке (для поворота иконки)
    toggleBtn.classList.toggle('active');

    // Меняем текст в зависимости от состояния
    if (wrapper.classList.contains('opened')) {
        btnText.textContent = 'Скрыть';
    } else {
        btnText.textContent = 'Показать все';
    }


});










/*document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
const text = toggleBtn.querySelector('.text');
function checkWidth() {
    if (window.innerWidth >= 1120) {
        toggleBtn.classList.add('active');
        text.textContent = 'Скрыть';
    } else {
        toggleBtn.classList.remove('active');
        text.textContent = 'Показать все'
    }
}
checkWidth();

window.addEventListener('resize', checkWidth);
});*/


/*const swiper = new Swiper('.swiper', {
    slidesPerView:auto,
    spaceBetween:16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
        }
    }
}); */

/*let swiper = null;
function initSwiper() {
    if (window.innerWidth<768) {
        if (!swiper) {
            swiper = new Swiper('.swiper', {
                slidesPerView:'auto',
                spaceBetween:16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        }
    } else {
        if (swiper) {
            swiper.destroy(true,true);
            swiper = undefined;
        }
    }
}
window.addEventListener('load',
    initSwiper);
    window.addEventListener('resize',
        initSwiper);


   const toggleBtn = document.getElementById('toggleBtn');
const slides = document.querySelectorAll('.swiper-slide');
let expanded = false;

toggleBtn.addEventListener('click', () => {
 expanded = !expanded;

 if (expanded) {
 slides.forEach(slide => slide.style.display = 'block');
 toggleBtn.querySelector('.text').textContent = 'Скрыть';
 } else {
 slides.forEach((slide, index) => {
 if (window.innerWidth >= 1120) {
 slide.style.display = index < 8 ? 'block' : 'none';
 } else if (window.innerWidth >= 768) { slide.style.display = index < 6 ? 'block' : 'none';
 }
 });
 toggleBtn.querySelector('.text').textContent = 'Показать всё';
 }
});   */  