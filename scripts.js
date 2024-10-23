document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const range = document.getElementById('range');
    const rangeValue = document.getElementById('rangeValue');

    // Update range value display
    range.addEventListener('input', () => {
        rangeValue.textContent = range.value;
    });

    // Form Validation
    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Helper function to show error
        const showError = (inputId, errorId) => {
            document.getElementById(errorId).style.display = 'block';
            isValid = false;
        };

        // Helper function to hide error
        const hideError = (errorId) => {
            document.getElementById(errorId).style.display = 'none';
        };

        // Validate Text
        const text = document.getElementById('text');
        if (text.value.trim() === '') {
            showError('text', 'textError');
        } else {
            hideError('textError');
        }

        // Validate Password
        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            showError('password', 'passwordError');
        } else {
            hideError('passwordError');
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError('email', 'emailError');
        } else {
            hideError('emailError');
        }

        // Validate Number
        const number = document.getElementById('number');
        if (number.value < 1 || number.value > 100) {
            showError('number', 'numberError');
        } else {
            hideError('numberError');
        }

        // Validate Telephone
        const tel = document.getElementById('tel');
        const telPattern = /^[0-9]{10}$/;
        if (!telPattern.test(tel.value.trim())) {
            showError('tel', 'telError');
        } else {
            hideError('telError');
        }

        // Validate URL
        const url = document.getElementById('url');
        try {
            new URL(url.value.trim());
            hideError('urlError');
        } catch (_) {
            showError('url', 'urlError');
        }

        // Validate Date
        const date = document.getElementById('date');
        if (date.value === '') {
            showError('date', 'dateError');
        } else {
            hideError('dateError');
        }

        // Validate Time
        const time = document.getElementById('time');
        if (time.value === '') {
            showError('time', 'timeError');
        } else {
            hideError('timeError');
        }

        // Validate Color
        const color = document.getElementById('color');
        if (color.value === '') {
            showError('color', 'colorError');
        } else {
            hideError('colorError');
        }

        // Validate Checkbox
        const checkbox = document.getElementById('checkbox');
        if (!checkbox.checked) {
            showError('checkbox', 'checkboxError');
        } else {
            hideError('checkboxError');
        }

        // Validate Radio Buttons
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('gender', 'genderError');
        } else {
            hideError('genderError');
        }

        // Validate File
        const file = document.getElementById('file');
        if (file.files.length === 0) {
            showError('file', 'fileError');
        } else {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
            if (!allowedExtensions.exec(file.value)) {
                showError('file', 'fileError');
            } else {
                hideError('fileError');
            }
        }

        // Validate Search
        const search = document.getElementById('search');
        if (search.value.trim() === '') {
            showError('search', 'searchError');
        } else {
            hideError('searchError');
        }

        // Validate Select
        const cars = document.getElementById('cars');
        if (cars.value === '') {
            showError('cars', 'carsError');
        } else {
            hideError('carsError');
        }

        // Validate Textarea
        const textarea = document.getElementById('textarea');
        if (textarea.value.trim() === '') {
            showError('textarea', 'textareaError');
        } else {
            hideError('textareaError');
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission
            alert('Please correct the errors in the form.');
        }
    });
});
