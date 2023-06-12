const background = document.querySelector(".header-background-1");
const header = document.querySelector("header");

export default function HeaderBackground() {
  header.addEventListener("click", (event) => {
    if (event.target.id !== "header") return;
    background.classList.toggle("header-hide");
  });
}
