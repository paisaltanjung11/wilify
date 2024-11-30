document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const errorMessages = document.getElementById("errorMessages");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessages.innerHTML = "";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const age = form.age.value.trim();
    const gender = form.gender.value;

    let errors = [];

    if (!name) {
      errors.push("Name is required.");
    }

    if (!email) {
      errors.push("Email is required.");
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (!password) {
      errors.push("Password is required.");
    } else if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    if (!age) {
      errors.push("Age is required.");
    } else if (isNaN(age) || age <= 0) {
      errors.push("Please enter a valid age.");
    }

    if (!gender) {
      errors.push("Gender is required.");
    }

    if (errors.length > 0) {
      errorMessages.innerHTML = errors.join("<br>");
    } else {
      form.submit();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
