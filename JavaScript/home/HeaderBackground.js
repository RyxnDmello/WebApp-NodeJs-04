const backgrounds = document.querySelectorAll(".header-background");
const header = document.querySelector("header");

export default function HeaderBackground() {
  header.addEventListener("click", (event) => {
    if (event.target.id !== "header") return;
    SwitchBackgrounds();
  });
}

function SwitchBackgrounds() {
  backgrounds.forEach((background) => {
    if (background.classList.contains("reveal")) {
      background.style.opacity = 0;
    } else {
      background.style.opacity = 1;
    }

    background.classList.toggle("reveal");
  });
}
