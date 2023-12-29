'use strict';

// Tarifa type logic
const tarifaTypeOne = document.getElementById('weight-type-1');
const tarifaTypeTwo = document.getElementById('weight-type-2');
const paragraphContainer = document.querySelector('.tarifa-description');
const firstParagraph = paragraphContainer.innerHTML;
const radioLabel = document.querySelectorAll('.radio-label');
const secondParagraph = '<i class="fa-solid fa-circle-info"></i>Tarifa de $3.00 por libra real.';

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
    if (firstName.value === '') {
        firstNameError.textContent = 'Escribe tu nombre.';
    } else {
        firstNameError.textContent = '';
    }
});

lastname.addEventListener("input", function (e) {
    if (lastname.value === '') {
        lastnameError.textContent = 'Escribe tu apellido.';
    } else {
        lastnameError.textContent = '';
    }
});

email.addEventListener("input", function (e) {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
    } else {
        emailError.textContent = '';
    }
});

cellphone.addEventListener("input", function (e) {
    if (cellphone.validity.patternMismatch) {
        cellphoneError.textContent = 'Ingrese un número de celular de 8 dígitos.';
    } else {
        cellphoneError.textContent = '';
    }
});

city.addEventListener('input', function (e) {
    if (city.value === '') {
        cityError.textContent = 'Ingrese la ciudad donde reside actualmente.'
    } else {
        cityError.textContent = '';
    }
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
            result += 'Falta al menos 1 letra mayúscula.<br>';
        }
        if (regExpDigits.test(currentValue)) {
            result += '';
        } else {
            result += 'Falta al menos 1 número.<br>';
        }
        if (currentValue.length < 9) {
            result += 'La contraseña debe tener al menos 8 caracteres.<br>';
        } else {
            result += '';
        }
        passwordError.innerHTML = result;
    } else {
        passwordError.textContent = '';
    }
});

confirmPassword.addEventListener('input', function (e) {
    confirmPasswordError.textContent = (confirmPassword.value !== password.value) ? 'Las contraseñas no coinciden' : null;
});

// Language Toggle

//Dark and light mode