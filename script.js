'use strict';


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