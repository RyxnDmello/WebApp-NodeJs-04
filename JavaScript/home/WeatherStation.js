const containers = document.querySelectorAll(".weather-station");
const expandButtons = document.querySelectorAll(".weather-expand-button");
const collapseButtons = document.querySelectorAll(".weather-collapse-button");

export default function WeatherStation() {
  WeatherController();
}

function WeatherController() {
  expandButtons.forEach((button, index) =>
    button.addEventListener("click", () => Expand(index))
  );

  collapseButtons.forEach((button, index) =>
    button.addEventListener("click", () => Collapse(index))
  );
}

function Expand(index) {
  const expandedHeight =
    containers[index].children[0].clientHeight +
    containers[index].children[1].clientHeight +
    325;

  containers[index].classList.add("container-expanded");
  containers[index].style.height = `${expandedHeight}px`;

  AnimateButtons(index);
}

function Collapse(index) {
  containers[index].classList.remove("container-expanded");
  containers[index].style.height = "170px";

  AnimateButtons(index);
}

function AnimateButtons(index) {
  if (containers[index].classList.contains("container-expanded")) {
    expandButtons[index].style.pointerEvents = "none";
    expandButtons[index].style.opacity = 0;

    collapseButtons[index].style.pointerEvents = "all";
    collapseButtons[index].style.opacity = 1;
    return;
  }

  expandButtons[index].style.pointerEvents = "all";
  expandButtons[index].style.opacity = 1;

  collapseButtons[index].style.pointerEvents = "none";
  collapseButtons[index].style.opacity = 0;
}
