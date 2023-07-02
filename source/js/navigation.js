let navMain=document.querySelector('.navigation');
let navToggle=document.querySelector('.navigation__toggle');
navMain.classList.remove('navigation--nojs');
navMain.classList.add('navigation--closed');
navToggle.addEventListener('click', function () {
navMain.classList.toggle('navigation--closed');
});
