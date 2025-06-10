# form_validation

This project is a responsive and visually appealing **user registration form** that performs **client-side validation** to ensure all inputs are provided by a human, not a bot. The form validates inputs such as name, email, phone number, and passwords with custom error messages and conditions.

---

## 🚀 Features

- 🔐 Full Name, Email, Phone Number, Password, and Confirm Password fields
- ✅ Real-time form validation using JavaScript:
  - Name must be at least 5 characters
  - Email must contain '@'
  - Phone must be 10 digits and not be '1234567890'
  - Password must:
    - Be at least 8 characters
    - Not be 'password' or match the user's name
  - Confirm Password must match Password
- 🚫 Clear error messages for each invalid input
- 🎨 Stylish UI using Bootstrap, CSS, and Bootstrap Icons
- 💡 Uses onSubmit and onChange events for validation
- 🌐 Fully responsive and mobile-friendly
- 💥 Creative modern design using gradients, glassmorphism, and icons

---

## 🛠️ Tech Stack

- HTML5
- CSS3 + Bootstrap 5.3
- JavaScript (Vanilla JS)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## 📁 Project Structure

📦 form_validation
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┗ 📜 README.md

---

## 💻 Live Demo

➡️ Hosted on **Netlify**: [Click here to view live calculator](https://gayathri-formvalidation.netlify.app/)

---

## 🧠 Concepts Used

### 🖥️ HTML
- Semantic HTML5 structure for form elements
- Input types like `text`, `email`, `tel`, and `password`
- `required` attribute for basic input validation
- `<label>` for accessibility and icon usage

### 🎨 CSS & Bootstrap
- Bootstrap 5 grid and utility classes for responsiveness
- `form-control`, `btn`, `card`, `shadow`, and spacing classes
- Custom CSS for:
  - Glassmorphism effect (blurred, translucent card background)
  - Gradient backgrounds
  - Button hover animations
  - Focus styles and transitions
- Use of `min-vh-100`, `d-flex`, `justify-content-center`, `align-items-center` to center the form

### 💡 Bootstrap Icons
- Used `bi` icon classes in labels for better visual design
- Icons like `bi-person-fill`, `bi-envelope-fill`, `bi-lock-fill`, etc.

### ⚙️ JavaScript (Vanilla JS)
- **Event Listeners:**
  - `onSubmit` to handle form submission and validation
  - `onChange` to give real-time feedback if desired
- **Form Validation Logic:**
  - Length checks for name and password
  - `includes('@')` to validate email
  - Regex and digit checks for phone number
  - Password and confirm password match
- **DOM Manipulation:**
  - Using `getElementById` and `.value` to access and validate user inputs
  - Displaying error messages using `.innerText`
- **Security Concepts:**
  - Preventing common weak passwords (`password`, user’s name)
  - Forcing strong password criteria
  - Rejecting obvious spam entries like `123456789`

### 🌐 Deployment
- **GitHub**: Used for version control and code hosting
- **Netlify**: Used for live deployment with continuous deployment from GitHub

---


