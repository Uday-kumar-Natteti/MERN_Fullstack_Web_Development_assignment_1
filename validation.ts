// Type script for registration-form

// Define an interface for user data
interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  // Enum for error messages
  enum ErrorMessages {
    NameTooShort = 'Name must be at least 3 characters.',
    InvalidEmail = 'Please enter a valid email address.',
    PasswordTooShort = 'Password must be at least 8 characters.',
    PasswordMismatch = 'Passwords do not match.',
  }
  
  // Function to validate user data
  function validateUserData(user: User): string[] {
    const errors: string[] = [];
  
    // Validate name
    if (user.name.length < 3) {
      errors.push(ErrorMessages.NameTooShort);
    }
  
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(user.email)) {
      errors.push(ErrorMessages.InvalidEmail);
    }
  
    // Validate password
    if (user.password.length < 8) {
      errors.push(ErrorMessages.PasswordTooShort);
    }
  
    // Validate confirm password
    if (user.password !== user.confirmPassword) {
      errors.push(ErrorMessages.PasswordMismatch);
    }
  
    return errors;
  }
  
  // Example usage
  const user: User = {
    name: "hello",
    email: "hi@example.com",
    password: "password123",
    confirmPassword: "password123"
  };
  // Verifying the validation
  const errors = validateUserData(user);
  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log("Validation successful!");
  }
  