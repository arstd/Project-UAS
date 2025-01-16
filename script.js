function submitForm() {
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let hasError = false;

    // Validate Name
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      hasError = true;
    }

    // Validate Email
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address.';
      hasError = true;
    }

    // Validate Message
    if (!message) {
      document.getElementById('messageError').textContent = 'Message is required.';
      hasError = true;
    }

    // If no errors, simulate form submission
    if (!hasError) {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    }
  }