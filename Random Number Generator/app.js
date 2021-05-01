'use strict';
const minField = document.getElementById('min');
const maxField = document.getElementById('max');
const generateBtn = document.getElementById('btn');
const display = document.querySelector(".generated-number");
const message = document.querySelector('.message');


function enableDisableButton() {
    if (minField.value.trim() !== "" && maxField.value.trim() !== "") {
        generateBtn.disabled = false;
        generateBtn.style.backgroundColor = 'rgb(72, 116, 103)';
        generateBtn.style.color = '#fff';
        generateBtn.style.transition = 'all .3s ease';
    }
    else {
        generateBtn.disabled = true;
        generateBtn.removeAttribute('style');
        generateBtn.style.transition = 'all .3s ease';
    }
}
function checkFields() {
    /* WILL UPDATE CODE LATER */
}

function changeColor(generatedNumber) {
    if (generatedNumber < 0) {
        display.style.color = 'red';
    } else if (generatedNumber > 0) {
        display.style.color = 'green';
    } else {
        display.style.color = 'gray';
    }
}

function generateRandomNumber() {
    // checkFields();
    let minValue = parseInt(minField.value);
    let maxValue = parseInt(maxField.value);
    let range = (maxValue - minValue) + 1;
    let generatedNumber = minValue + Math.floor(Math.random() * range);
    display.innerText = `${generatedNumber}`;
    changeColor(generatedNumber);
}
