const carousels = document.querySelectorAll(".personal-features-carousel");
const buttons = document.querySelectorAll(".personal-controller-button");
const slides = document.querySelectorAll(".personal-features");

const buttonCollection = [];
const slideCollection = [];
const duration = 525;

export default function PersonalCarousel() {
  GetCollection();
  SwitchSlides();
}

function SwitchSlides() {
  buttonCollection.forEach((buttons, collectionIndex) => {
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        ButtonsAnimation(collectionIndex, index);
        MoveSlides(collectionIndex, index);
      });
    });
  });
}

function MoveSlides(collectionIndex, index) {
  SlidesAnimation(collectionIndex, 0);

  setTimeout(() => {
    slideCollection[collectionIndex].forEach((slide) => {
      slide.style.transform = `translateX(${
        -index * (carousels[collectionIndex].clientWidth - 32)
      }px)`;
    });
  }, duration + 2.5);

  SlidesAnimation(collectionIndex, duration + 5);
}

function SlidesAnimation(collectionIndex, duration) {
  setTimeout(() => {
    slideCollection[collectionIndex].forEach((slide) => {
      if (slide.classList.contains("slide-fade-out")) {
        slide.classList.remove("slide-fade-out");
        slide.classList.add("slide-fade-in");
      } else {
        slide.classList.remove("slide-fade-in");
        slide.classList.add("slide-fade-out");
      }
    });
  }, duration);
}

function ButtonsAnimation(collectionIndex, buttonIndex) {
  buttonCollection[collectionIndex].forEach((button, index) => {
    if (buttonIndex === index) {
      button.style.borderColor = "#fff";
      button.style.opacity = "1";
    } else {
      button.style.borderColor = "transparent";
      button.style.opacity = "0.25";
    }
  });
}

function GetCollection() {
  let buttonGroup = [];
  let slideGroup = [];
  let size = 0;

  for (let i = 0; i < buttons.length; i++) {
    if (size === 7) {
      buttonCollection.push(buttonGroup);
      slideCollection.push(slideGroup);

      buttonGroup = [];
      slideGroup = [];

      size = 0;
    }

    buttonGroup.push(buttons[i]);
    slideGroup.push(slides[i]);
    ++size;
  }

  buttonCollection.push(buttonGroup);
  slideCollection.push(slideGroup);

  console.log(buttonCollection);
  console.log(slideCollection);
}
