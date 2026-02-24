
document.addEventListener('DOMContentLoaded', function () {
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
});


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
});*/

let swiper;
function initSwiper() {
    if (window.innerWidth<768) {
        if (!swiper) {
            swiper = new swiper('.swiper', {
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
