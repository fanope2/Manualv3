//NAVBAR 
const header = document.querySelector("header"); window.addEventListener("scroll", function () { header.classList.toggle("sticky", this.window.scrollY > 60) });

// Menu

const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');

[openMenuBtn, closeMenuBtn].forEach(btn => {
     // console.log(btn)
     btn.addEventListener('click', () => {
          menu.classList.toggle('open');
          menu.style.transition = "transform 0.5s ease";
     })
});
menu.addEventListener("transitioned", function () {
     this.removeAtribute("style");
})

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
     // console.log(arrow)
     arrow.addEventListener("click", function () {
          this.closest(".dropdown").classList.toggle("active");
     })
})