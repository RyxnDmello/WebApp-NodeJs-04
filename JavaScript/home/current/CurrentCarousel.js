const carousel = document.querySelector(".current-station-carousel");
const slides = document.querySelectorAll(".current-station-slide");
const buttons = document.querySelectorAll(".current-station-controller-button");
const search = document.querySelector(".current-button");

const width = carousel.clientWidth - 32;
const duration = 500;

export default function CurrentCarousel() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      SwitchSlides(index);
      ControllerAnimation(index);
    });
  });

  search.addEventListener("click", () => {
    SwitchSlides(0);
    ControllerAnimation(0);
  })
}

function SwitchSlides(index) {
  SlideAnimation(0);

 setTimeout(() => {
   slides.forEach((slide) => {
     slide.style.transform = `translateX(${-index * width}px)`;
   });
 }, duration + 2.5);

 SlideAnimation(duration + 5);
}

function SlideAnimation(duration) {
  setTimeout(() => {
    slides.forEach((slide) => {
      if (slide.classList.contains("current-slide-fade-out")) {
        slide.classList.remove("current-slide-fade-out");
        slide.classList.add("current-slide-fade-in");
      } else {
        slide.classList.remove("current-slide-fade-in");
        slide.classList.add("current-slide-fade-out");
      }
    });
  }, duration);
}

function ControllerAnimation(buttonIndex) {
  buttons.forEach((button, index) => {
    if (index === buttonIndex) {
      button.style.borderColor = "#fff";
      button.style.opacity = 1;
    } else {
      button.style.borderColor = "transparent";
      button.style.opacity = 0.25;
    }
  });
}
