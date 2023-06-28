const Hamburger  = document.querySelector('.burger-menu svg')
const navmenu = document.querySelector('.burger-dropdown')
Hamburger.addEventListener('click', ()=>{
    navmenu.classList.toggle('active');
});