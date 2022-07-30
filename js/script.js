let menubar = document.querySelector("#menu-bar");
let myNav = document.querySelector(".navbar");
let searchBar = document.querySelector("#menu-search");
let search = document.querySelector(".search");

menubar.onclick = () => {
  myNav.classList.toggle("active");
  //menubar.classList.toggle('fa-times');
};

searchBar.onclick = () => {
  search.classList.toggle("active");
};

//slide
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// review slider
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// preloader
var loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
