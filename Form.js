const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    if (name.length < 5) {
        showError('nameError', 'Full name must be at least 5 characters long.');
        isValid = false;
    }

    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone) || phone === '1234567890') {
        showError('phoneError', 'Enter a valid 10-digit phone number, not 1234567890.');
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
        showError('passwordError', 'Password is too weak.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
        clearErrors();
    });
});
