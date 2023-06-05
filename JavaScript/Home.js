const carousel = document.querySelector(".header-features-carousel");
const slides = document.querySelectorAll(".header-feature-slide");
const options = document.querySelectorAll(".header-feature-slide-option");

function SwitchSlides() {
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.style.translate = `${-index * carousel.clientWidth}px 0px`;
      });
    });
  });
}

function AnimateOptions() {
}

SwitchSlides();
