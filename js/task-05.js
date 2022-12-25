const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const nameToChange = document.querySelector("#name-output");
console.log(nameToChange);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameToChange.textContent = event.currentTarget.value;
}
