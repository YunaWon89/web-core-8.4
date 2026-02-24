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


/*toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');

    if(toggleBtn.classList.contains('active')) {
        text.textContent = '' ;
    } else {
        text.textContent = '' ;
    }
});*/