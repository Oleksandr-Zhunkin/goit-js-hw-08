const formUserData = document.querySelector('.login-form');

formUserData.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('All form fields must be filled in');
  }

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userData);
  e.currentTarget.reset();
}
