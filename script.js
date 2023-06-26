//Mobile Hamburger menu

const Hamburger  = document.querySelector('.burger-menu svg')
const navmenu = document.querySelector('.burger-dropdown')
const viewMenuBtn = document.getElementById("viewMenuBtn");
const galleryBtn = document.getElementById("galleryBtn");

Hamburger.addEventListener('click', ()=>{
    navmenu.classList.toggle('active');
});

viewMenuBtn.addEventListener('click', function() {
    window.location.href = "/menu.html";
  });

galleryBtn.addEventListener('click', function() {
    window.location.href = "/gallery.html";
  });