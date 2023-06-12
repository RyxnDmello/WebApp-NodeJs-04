const carousel = document.querySelector(".header-features-carousel");
const slides = document.querySelectorAll(".header-feature-slide");
const options = document.querySelectorAll(".header-feature-slide-option");

let currentSlide = 0;

export default function HeaderCarousel() {
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      AnimateOptions(index);
      SwitchSlides(index);
    });
  });
}

function SwitchSlides(index) {
  slides[currentSlide].classList.remove("header-slide-fade-in");
  slides[currentSlide].classList.add("header-slide-fade-out");

  setTimeout(() => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${
        -index * (carousel.clientWidth - 16)
      }px)`;
    });
  }, 400);

  setTimeout(() => {
    slides[index].classList.remove("header-slide-fade-out");
    slides[index].classList.add("header-slide-fade-in");
    currentSlide = index;
  }, 425);
}

function AnimateOptions(selectedIndex) {
  options.forEach((option, index) => {
    if (selectedIndex === index) {
      option.style.opacity = "1";
    } else {
      option.style.opacity = "0.25";
    }
  });
}