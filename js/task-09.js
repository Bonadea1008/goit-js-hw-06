// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", onColorChange);
function onColorChange(event) {
  const newColor = getRandomHexColor();
  colorEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
}
