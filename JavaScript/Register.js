const carousel = document.querySelector(".register-carousel");
const slides = document.querySelectorAll(".register-slide");
const buttons = document.querySelectorAll(".register-button.switch");

const width = carousel.clientWidth - 64;

function RegisterCarousel() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      MoveSlides(index);
    });
  });
}

function MoveSlides(index) {
  const direction = index === 0 ? -1 : 0;

  slides.forEach((slide) => {
    slide.style.translate = `${direction * width}px 0`;
  });
}

RegisterCarousel();
