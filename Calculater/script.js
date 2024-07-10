function appendCharacter(char) {
  document.getElementById('result').value += char;
}

function clearResult() {
  document.getElementById('result').value = '';
}
function deleteCharacter() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
  try {
      let expression = document.getElementById('result').value;
      let result = eval(expression); // Using eval for simplicity; consider using a safer parser in production.
      document.getElementById('result').value = result;
  } catch (error) {
      document.getElementById('result').value = 'Error';
  }
}
