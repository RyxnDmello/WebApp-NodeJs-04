const carousel = document.querySelector(".register-carousel");
const background = document.querySelector(".register-carousel-background-1");
const buttons = document.querySelectorAll(".register-button.switch");

export default function RegisterBackground() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index === 0) carousel.style.backgroundColor = "#00000090";
      else carousel.style.backgroundColor = "transparent";

      background.classList.toggle("background-hide");
    });
  });
}
