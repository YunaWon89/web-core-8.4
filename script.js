const toggleBtn = document.getElementById('toggleBtn');
const text = toggleBtn.querySelector('.text');
toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');

    if(toggleBtn.classList.contains('active')) {
        text.textContent = 'Скрыть' ;
    } else {
        text.textContent = 'Показать все' ;
    }
});