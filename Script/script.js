const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function handleSignUpFormSubmit(e) {
  e.preventDefault(); // Prevent default form submission
  const email = emailInput.value; // Get the email value

  if (!isValidEmail(email)) {
    errorMessage.textContent = "Please enter a valid email";
    emailInput.style.backgroundColor = "#ff00001c";
    emailInput.style.border = "1px solid red"
  } else {
    errorMessage.textContent = "";
    document.getElementById('subMail').innerText = email;
    document.querySelector('.subscribed').classList.toggle('success');
    document.querySelector('.subscribed').classList.toggle('hide');
    form.classList.toggle('hide');
  }
}

form.addEventListener('submit', handleSignUpFormSubmit);


