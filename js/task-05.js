const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const nameToChange = document.querySelector("#name-output");
console.log(nameToChange);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    nameToChange.textContent = event.currentTarget.value;
  } else {
    nameToChange.textContent = "Anonymous";
  }
}
