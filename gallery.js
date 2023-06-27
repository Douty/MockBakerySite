const Hamburger = document.querySelector('.burger-menu svg');
const navmenu = document.querySelector('.burger-dropdown');
const videos = document.querySelectorAll('video');
const images = document.querySelectorAll('img');

Hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('active');
});

// When the user hovers over the videos, play and scale them up
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
    if (window.innerWidth > 768) {
      gsap.set(video, {
        scale: 1.3,
      });
    } else {
      gsap.set(video, {
        scale: 1,
      });
    }
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    gsap.set(video, {
      scale: 1,
    });
  });
});

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    if (window.innerWidth > 768) {
      gsap.set(image, {
        scale: 1.3,
      });
    } else {
      gsap.set(image, {
        scale: 1,
      });
    }
  });

  image.addEventListener("mouseout", () => {
    gsap.set(image, {
      scale: 1,
    });
  });
});

if (window.innerWidth > 768) {
  videos.forEach((video) => {
    video.style.opacity = 1;
  });

  images.forEach((image) => {
    image.style.opacity = 1;
  });
}

// Mobile view 
if (window.innerWidth <= 768) {
  videos.forEach((video) => {
    ScrollTrigger.create({
      trigger: video,
      start: "top center",
      end: "bottom center",
      markers: false,
      onEnter: () => {
        video.play();
        gsap.to(video, { scale: 1.3 });
      },
      onLeave: () => {
        video.pause();
        gsap.to(video, { scale: 1 });
      },
      onEnterBack: () => {
        video.play();
        gsap.to(video, { scale: 1.3 });
      },
      onLeaveBack: () => {
        video.pause();
        gsap.to(video, { scale: 1 });
      }
    });
  });

  images.forEach((image) => {
    ScrollTrigger.create({
      trigger: image,
      start: "top center",
      end: "bottom center",
      markers: true,
      onEnter: () => {
        gsap.to(image, { scale: 1.3 });
      },
      onLeave: () => {
        gsap.to(image, { scale: 1 });
      },
      onEnterBack: () => {
        gsap.to(image, { scale: 1.3 });
      },
      onLeaveBack: () => {
        gsap.to(image, { scale: 1 });
      },
    });
  });
}