var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');



signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

async function signIn() {
  const response = await fetch('/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/questions/rand');
  } else {
    alert('Failed to login');
  }
}

document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  signIn();
});

