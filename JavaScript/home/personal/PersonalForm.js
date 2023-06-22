const locations = document.querySelectorAll(
  ".personal-header-text.current-location"
);
const inputs = document.querySelectorAll(".personal-input");
const info = document.querySelector(".personal-form-information");

export default function PersonalForm() {
  ProtectInputs();
  SetInformation();
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
    inputs[1].placeholder = "Not Required";
    inputs[2].placeholder = "Not Required";

    inputs[1].disabled = true;
    inputs[2].disabled = true;
  } else {
    inputs[1].placeholder = "Optional";
    inputs[2].placeholder = "Optional";

    inputs[1].disabled = false;
    inputs[2].disabled = false;
  }
}

function DisableCity() {
  if (inputs[1].value.length > 0 || inputs[2].value.length > 0) {
    inputs[0].placeholder = "Not Required";
    inputs[0].disabled = true;
  } else {
    inputs[0].placeholder = "Required";
    inputs[0].disabled = false;
  }
}

function SetInformation() {
  let coordinates = 0;
  let cities = 0;

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].textContent.charAt(0).includes("1234567890")) {
      ++coordinates;
    } else ++cities;
  }

  if (cities === 1) cities = `1 City`;
  else cities = `${cities} Cities`;

  if (coordinates === 1) coordinates = `1 Coordinate`;
  else coordinates = `${coordinates} Coordinates`;

  info.textContent = `${cities} • ${coordinates}`;
}
