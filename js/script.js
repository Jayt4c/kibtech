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

// contact
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
