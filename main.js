const allMark = document.querySelector('.right');
const mark = document.querySelectorAll('.nUnread');
const container = document.querySelector('.container');
const number = document.querySelector('.number');

allMark.addEventListener('click', () => {
    container.classList.add('active');
    number.innerHTML = Number(0);
})

mark.forEach(element => {
    element.addEventListener('click', (e) => {
        e.composedPath()[2].classList.add('active');
        number.innerHTML--;
    })
});