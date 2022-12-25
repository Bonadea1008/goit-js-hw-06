const counter = {
  value: 0,
  increment() {
    console.log("(increment) => this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement => this", this);
    this.value -= 1;
  },
};

const allBtn = document.querySelectorAll("#counter button");

const decrementBtn = allBtn[0];
const incrementBtn = allBtn[1];
const valueEl = document.querySelector("#value");

console.log(decrementBtn, incrementBtn, valueEl);

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);

  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);

  valueEl.textContent = counter.value;
});
