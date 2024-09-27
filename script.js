let display = document.getElementById('display');

// Append a number to the display
function appendNumber(number) {
  display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
  display.value += operator;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Calculate trigonometric functions
function calculateTrig(func) {
  let value = parseFloat(display.value);
  if (func === 'sin') {
    display.value = Math.sin(value);
  } else if (func === 'cos') {
    display.value = Math.cos(value);
  } else if (func === 'tan') {
    display.value = Math.tan(value);
  }
}

// Calculate logarithm (log base 10)
function calculateLog() {
  let value = parseFloat(display.value);
  display.value = Math.log10(value);
}

// Calculate exponent (e^x)
function calculateExp() {
  let value = parseFloat(display.value);
  display.value = Math.exp(value);
}
