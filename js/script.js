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
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});
// preloader
var loader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
