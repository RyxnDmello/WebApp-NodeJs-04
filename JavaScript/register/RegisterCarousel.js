const carousel = document.querySelector(".register-carousel");
const slides = document.querySelectorAll(".register-slide");
const buttons = document.querySelectorAll(".register-button.switch");
const background = document.querySelector(".register-carousel-background");

const width = carousel.clientWidth - 64;

export default function RegisterCarousel() {
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

function BackgroundAnimation() {}
