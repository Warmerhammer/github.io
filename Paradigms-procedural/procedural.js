const form = document.getElementById('user-input');

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;

  const passwordinput = document.getElementById('password');
  const enteredPassword = passwordinput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - PW must be 6 characters or longer!');
    return;
  }
  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };
  console.log(user);
  console.log('Hi, I am ' + user.userName);
}

form.addEventListener('submit', signupHandler);
