const inputOne = document.getElementById('numOne');
const inputTwo = document.getElementById('numTwo');
const addOption = document.getElementById('add');
const subtractOption = document.getElementById('subtract');
const multiplyOption = document.getElementById('multiply');
const divideOption = document.getElementById('divide');
const calcBtn = document.getElementById('calc-btn');
const result = document.getElementById('result');


function calcResult() {
  const numOne = Number(inputOne.value);
  const numTwo = Number(inputTwo.value);

  // Check if both inputs are numbers
  if (isNaN(numOne) || isNaN(numTwo)) {
    result.innerHTML = "Please enter valid numbers";
    return;
  }

  let calc;

  // Check which operation is selected
  if (addOption.checked) {
    calc = numOne + numTwo;
  } else if (subtractOption.checked) {
    calc = numOne - numTwo;
  } else if (multiplyOption.checked) {
    calc = numOne * numTwo;
  } else if (divideOption.checked) {
    // Check if dividing by zero
    if (numTwo === 0) {
      result.innerHTML = "Division by zero is not allowed";
      return;
    }
    calc = numOne / numTwo;
  } else {
    result.innerHTML = "Please select an operation";
    return;
  }

  result.innerHTML = `Your result is <b>${calc}</b>`;
}

calcBtn.addEventListener('click', calcResult);