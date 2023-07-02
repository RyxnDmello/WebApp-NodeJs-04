const inputs = document.querySelectorAll(".current-input");

export default function CurrentForm() {
  ProtectInputs();
}

function ProtectInputs() {
  inputs.forEach((input, index) => {
    input.addEventListener("keyup", () => {
      if (index === 0) DisableCoordinates();
      else DisableCity();
    });
  });
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
