/*---------------- TOGGLE BUTTON ----------------*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Select all links
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

// Loop through each nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

/*---------------- SHOW SCROLL UP ----------------*/
const scrollup = () => {
  const scrollupBtn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
    scrollupBtn.classList.remove("-bottom-1/2");
    scrollupBtn.classList.add("bottom-4");
  } else {
    scrollupBtn.classList.add("-bottom-1/2");
    scrollupBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollup);


/*---------------- CHANGE BACKGROUND HEADER ----------------*/

/*---------------- SWIPER ----------------*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

/*---------------- SCROLL SECTION ACTIVE LINK ----------------*/

/*---------------- SCROLL REVEAL ANIMATION ----------------*/
