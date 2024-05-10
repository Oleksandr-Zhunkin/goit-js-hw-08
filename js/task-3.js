const nameInput = document.querySelector('#name-input');
const spanNameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleNameInput);

function handleNameInput(e) {
  const input = e.target.value.trim();
  console.log(input);
  spanNameOutput.textContent = input || 'Anonymous';
}
