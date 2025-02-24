// javascript for registration-form
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => {
      error.style.display = 'none';
    });
  
    // Validate Name
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');
    if (name.length < 3) {
      showError(nameError, "Name must be at least 3 characters.");
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      showError(emailError, "Please enter a valid email address.");
      isValid = false;
    }
  
    // Validate Password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    if (password.length < 8) {
      showError(passwordError, "Password must be at least 8 characters.");
      isValid = false;
    }
  
    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPassword !== password) {
      showError(confirmPasswordError, "Passwords do not match.");
      isValid = false;
    }
  
    // If valid, proceed with submission (or other actions)
    if (isValid) {
      alert('Registration successful!');
      
      document.getElementById('registration-form').reset();
      setTimeout(() =>{
        location.reload();
      }, 1000);
    }
  });
  
  // Helper function to show error messages
  function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
  }
  