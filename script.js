// Get form and input elements
const form = document.getElementById('registerForm');
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

// Get error display elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');

// Validate on submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  let valid = true;

  // Clear previous errors
  clearErrors();

  // Validate Name
  const name = nameInput.value.trim();
  if (name.length < 5) {
    nameError.textContent = "Name must be at least 5 characters.";
    valid = false;
  }

  // Validate Email
  const email = emailInput.value.trim();
  if (!email.includes('@')) {
    emailError.textContent = "Enter a valid email with @.";
    valid = false;
  }

  // Validate Phone
  const phone = phoneInput.value.trim();
  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  }

  // Validate Password
  const password = passwordInput.value;
  if (password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase() || password.length < 8) {
    passwordError.textContent = "Password is not strong enough.";
    valid = false;
  }

  // Confirm Password Match
  if (password !== confirmInput.value) {
    confirmError.textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Clear all error messages
function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmError.textContent = '';
}

// Optional: Live validation on field change
nameInput.addEventListener('change', () => { if (nameInput.value.length >= 5) nameError.textContent = ''; });
emailInput.addEventListener('change', () => { if (emailInput.value.includes('@')) emailError.textContent = ''; });
phoneInput.addEventListener('change', () => { if (phoneInput.value.length === 10 && phoneInput.value !== "123456789") phoneError.textContent = ''; });
passwordInput.addEventListener('change', () => { if (passwordInput.value.length >= 8) passwordError.textContent = ''; });
confirmInput.addEventListener('change', () => { if (confirmInput.value === passwordInput.value) confirmError.textContent = ''; });
