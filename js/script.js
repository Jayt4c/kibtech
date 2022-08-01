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
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".company-reviews", {
  slidesPerView: 1,
  spaceBetween: 5,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      // spaceBetween: 50,
    },
  },
});

// preloader
var loader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
