const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const result = document.getElementById('result');


function calc(event) {
  const operation = event.srcElement.id;
  let calc;
  let operator;

  valueOne = Number(inputOne.value);
  valueTwo = Number(inputTwo.value);

  switch (operation) {
    case 'add':
      calc = valueOne + valueTwo;
      operator = '+';
      break;
    case 'subtract':
      calc = valueOne - valueTwo;
      operator = '-';
      break;
    case 'multiply':
      calc = valueOne * valueTwo;
      operator = '×'
      break;
    case 'divide':
      calc = valueOne / valueTwo;
      operator = '÷'
      break;
  }

  result.innerHTML = `<span>${valueOne} ${operator} ${valueTwo} = </span><b>${calc}</b>`;
}


addBtn.addEventListener('click', calc);
subtractBtn.addEventListener('click', calc);
multiplyBtn.addEventListener('click', calc);
divideBtn.addEventListener('click', calc);