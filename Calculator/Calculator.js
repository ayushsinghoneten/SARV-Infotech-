const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('number') || button.classList.contains('operator')) {
      if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        let result = Function('"use strict";return (' + currentInput + ')')();
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    }
  });
});
