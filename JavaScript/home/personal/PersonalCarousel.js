const carousels = document.querySelectorAll(".personal-features-carousel");
const buttons = document.querySelectorAll(".personal-controller-button");
const slides = document.querySelectorAll(".personal-features");

const buttonGroups = [];
const slideGroups = [];

export default function PersonalCarousel() {
  GetGroups();

  buttonGroups.forEach((buttonGroup, buttonGroupsIndex) => {
    buttonGroup.forEach((button, index) => {
      button.addEventListener("click", () => {
        slideGroups[buttonGroupsIndex].forEach((slide) => {
          slide.style.translate = `${
            -index * (carousels[buttonGroupsIndex].clientWidth - 32)
          }px 0px`;
        });
      });
    });
  });
}

function GetGroups() {
  let buttonGroup = [];
  let slideGroup = [];
  let count = 0;

  for (let i = 0; i < buttons.length; i++) {
    if (count === 7) {
      buttonGroups.push(buttonGroup);
      slideGroups.push(slideGroup);

      buttonGroup = [];
      slideGroup = [];

      count = 0;
    }

    buttonGroup.push(buttons[i]);
    slideGroup.push(slides[i]);
    count = count + 1;
  }

  buttonGroups.push(buttonGroup);
  slideGroups.push(slideGroup);
}
