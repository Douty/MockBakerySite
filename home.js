//Mobile Hamburger menu

const Hamburger  = document.querySelector('.burger-menu svg')
const navmenu = document.querySelector('.burger-dropdown')
const viewMenuBtn = document.getElementById("viewMenuBtn");
const galleryBtn = document.getElementById("galleryBtn");
const images = document.querySelectorAll(".gallery-preview img")
Hamburger.addEventListener('click', ()=>{
    navmenu.classList.toggle('active');
});

viewMenuBtn.addEventListener('click', function() {
    window.location.href = "/menu.html";
  });

galleryBtn.addEventListener('click', function() {
    window.location.href = "/gallery.html";
  });

images.forEach(image =>{
  ScrollTrigger.create({
    trigger: image,
    start: "top bottom",
    end: "bottom center",
    markers: false, 
    onEnter:()=>{
      gsap.to(image, {opacity: 1})
    } 
      
    })
  })

  ScrollTrigger.create({
    trigger: image,
    start: "top bottom",
    end: "bottom center",
    markers: false, 
    onEnter:()=>{
      gsap.to(image, {opacity: 1})
    } 
      
    })