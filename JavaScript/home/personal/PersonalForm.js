const locations = document.querySelectorAll(".personal-header-location-text");
const inputs = document.querySelectorAll(".personal-input");
const refresh = document.querySelector(".personal-form-button.refresh");
const info = document.querySelector(".personal-form-information");

export default function PersonalForm() {
  ProtectInputs();
  RefreshStation();
  DisplayInformation();
}

function ProtectInputs() {
  inputs.forEach((input, index) => {
    input.addEventListener("keyup", () => {
      if (index === 0) DisableCoordinates();
      else DisableCity();
    });
  });
}

function DisableCoordinates() {
  if (inputs[0].value.length > 0) {
    inputs[1].classList.add("input-inactive");
    inputs[2].classList.add("input-inactive");

    inputs[1].required = false;
    inputs[2].required = false;
  } else {
    inputs[1].classList.remove("input-inactive");
    inputs[2].classList.remove("input-inactive");

    inputs[1].required = true;
    inputs[2].required = true;
  }
}

function DisableCity() {
  if (inputs[1].value.length > 0 || inputs[2].value.length > 0) {
    inputs[0].classList.add("input-inactive");
    inputs[0].required = false;
  } else {
    inputs[0].classList.remove("input-inactive");
    inputs[0].required = true;
  }
}

function RefreshStation() {
  refresh.addEventListener("click", () => {
    setTimeout(() => {
      location.reload();
    }, 160);
  });
}

function DisplayInformation() {
  if (locations.length === 0) {
    info.textContent = "";
    return;
  }

  let coordinates = 0;
  let cities = 0;

  for (let i = 0; i < locations.length; i++) {
    if (/\d/.test(locations[i].textContent)) ++coordinates;
    else ++cities;
  }

  if (cities === 1) cities = `1 City`;
  else cities = `${cities} Cities`;

  if (coordinates === 1) coordinates = `1 Coordinate`;
  else coordinates = `${coordinates} Coordinates`;

  info.textContent = `${cities} • ${coordinates}`;
}
