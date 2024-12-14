/*---------------- TOGGLE BUTTON ----------------*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Select all links
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle('ri-close-large-line');
});

// Loop through each nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle('ri-close-large-line');
  });
});

/*---------------- SHOW SCROLL UP ----------------*/

/*---------------- CHANGE BACKGROUND HEADER ----------------*/

/*---------------- SWIPER ----------------*/

/*---------------- SCROLL SECTION ACTIVE LINK ----------------*/

/*---------------- SCROLL REVEAL ANIMATION ----------------*/
