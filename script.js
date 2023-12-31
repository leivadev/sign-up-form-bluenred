'use strict';

// Tarifa type logic
const tarifaTypeOne = document.getElementById('weight-type-1');
const tarifaTypeTwo = document.getElementById('weight-type-2');
const paragraphContainer = document.querySelector('.tarifa-description');
const firstParagraph = paragraphContainer.innerHTML;
const radioLabel = document.querySelectorAll('.radio-label');
const secondParagraph = '<i class="fa-solid fa-circle-info"></i>$3.00 fee per real pound.';

function toggleChecked() {
    paragraphContainer.innerHTML = !tarifaTypeOne.checked ? secondParagraph : firstParagraph;
}

radioLabel.forEach(e => {
    e.addEventListener('click', toggleChecked);
});

// input error handling

const firstName = document.getElementById('first_name');
const lastname = document.getElementById('last_name');
const email = document.getElementById('user_email');
const cellphone = document.getElementById('user_cellphone');
const city = document.getElementById('user_city');

const firstNameError = document.getElementById('first-name-error');
const lastnameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const cellphoneError = document.getElementById('cellphone-error');
const cityError = document.getElementById('city-error');

firstName.addEventListener("input", function (e) {
    firstNameError.textContent = firstName.value === '' ? 'Enter your first name.' : null;
});

lastname.addEventListener("input", function (e) {
    lastnameError.textContent = lastname.value === '' ? 'Enter your last name.' : null;
});

email.addEventListener("input", function (e) {
    emailError.textContent = email.validity.typeMismatch ? 'Enter a valid email.' : null;
});

cellphone.addEventListener("input", function (e) {
    cellphoneError.textContent = cellphone.validity.patternMismatch ? 'Enter an 8 digit number cellphone.' : null;
});

city.addEventListener('input', function (e) {
    cityError.textContent = city.value === '' ? 'Enter the city where you currently reside.' : null;
})

//password match

const password = document.getElementById('user_password');
const confirmPassword = document.getElementById('user_confirm_password');

const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

password.addEventListener('input', function (e) {
    if (password.validity.patternMismatch) {
        const currentValue = password.value;
        const regExpCapitalLetter = /[A-Z]/g;
        const regExpDigits = /[0-9]/g;
        let result = '';
        if (regExpCapitalLetter.test(currentValue)) {
            result += '';
        } else {
            result += 'Missing at least 1 capital letter.<br>';
        }
        if (regExpDigits.test(currentValue)) {
            result += '';
        } else {
            result += 'Missing at least 1 number.<br>';
        }
        if (currentValue.length < 9) {
            result += 'Must be at least 8 characters.<br>';
        } else {
            result += '';
        }
        passwordError.innerHTML = result;
    } else {
        passwordError.textContent = '';
    }
});

confirmPassword.addEventListener('input', function (e) {
    confirmPasswordError.textContent = (confirmPassword.value !== password.value) ? 'Passwords do not match.' : null;
});

//Dark and light mode
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("[data-theme-toggle]");
const iconElement = document.getElementById("icon");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });


function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    const newIcon = newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    iconElement.className = newIcon;
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    currentThemeSetting = newTheme;
});

// toggle password visibility

const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.className = (type === "text" ? "fa fa-eye" : "fa fa-eye-slash");
});

toggleConfirmPassword.addEventListener("click", function () {
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);

    this.className = (type === "text" ? "fa fa-eye" : "fa fa-eye-slash");
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});