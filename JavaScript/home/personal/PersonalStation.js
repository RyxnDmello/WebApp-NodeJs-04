const containers = document.querySelectorAll(".personal-station");
const expandButtons = document.querySelectorAll(".personal-expand-button");
const collapseButtons = document.querySelectorAll(".personal-collapse-button");

const stationExpandedHeight = 520;
const stationCollapsedHeight = 165;

export default function PersonalStation() {
  StationController();
}

function StationController() {
  expandButtons.forEach((button, index) =>
    button.addEventListener("click", () => Expand(index))
  );

  collapseButtons.forEach((button, index) =>
    button.addEventListener("click", () => Collapse(index))
  );
}

function Expand(index) {
  containers[index].style.height = `${stationExpandedHeight}px`;
  containers[index].classList.add("container-expanded");

  AnimateButtons(index);
}

function Collapse(index) {
  containers[index].style.height = `${stationCollapsedHeight}px`;
  containers[index].classList.remove("container-expanded");

  AnimateButtons(index);
}

function AnimateButtons(index) {
  if (containers[index].classList.contains("container-expanded")) {
    expandButtons[index].style.pointerEvents = "none";
    expandButtons[index].style.opacity = 0;

    setTimeout(() => {
      collapseButtons[index].style.pointerEvents = "all";
      collapseButtons[index].style.opacity = 1;
    }, 650);
    return;
  }

  setTimeout(() => {
    expandButtons[index].style.pointerEvents = "all";
    expandButtons[index].style.opacity = 1;
  }, 650);

  collapseButtons[index].style.pointerEvents = "none";
  collapseButtons[index].style.opacity = 0;
}
