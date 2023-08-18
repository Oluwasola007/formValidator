const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {
nameError.textContent = nameInput.value ? "" : "Name is required.";
emailError.textContent = emailInput.value ? "" : "Email must contain @";
passwordError.textContent = passwordInput.value.length >= 6 ? "" : "Password must be at least 6 characters.";

if (emailInput.value && !emailInput.value.includes('@')) {
    emailError.textContent = "Invalid email format.";
}
if (nameInput.value && emailInput.value && emailInput.value.includes('@') && passwordInput.value.length >= 6) {
    alert("Form submitted successfully!");
}
});