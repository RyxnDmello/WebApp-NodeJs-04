const carousel = document.querySelector(".current-station-carousel");
const slides = document.querySelectorAll(".current-station-slide");
const buttons = document.querySelectorAll(".current-station-controller-button");

const width = carousel.clientWidth - 32;

export default function CurrentCarousel() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => SwitchSlides(index));
  });
}

function SwitchSlides(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${-index * width}px)`;
  });
}
