let count = 0;
const counterDisplay = document.getElementById("counter");

function updateDisplay() {
  counterDisplay.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}
