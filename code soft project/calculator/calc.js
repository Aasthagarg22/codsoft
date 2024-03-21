// Function to append value to input field
function appendValue(value) {
    document.getElementById("name").value += value;
}

// Function to clear input field
function clearField() {
    document.getElementById("name").value = "";
}

// Function to calculate result
function calculateResult() {
    let expression = document.getElementById("name").value;
    let result = eval(expression);
    document.getElementById("name").value = result;
}

// Function to move cursor to the end of input field
function moveAtend() {
    let input = document.getElementById("name");
    input.focus();
    input.selectionStart = input.selectionEnd = input.value.length;
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let value = this.textContent.trim();
            if (value === "=") {
                calculateResult();
            } else if (value === "Clear") {
                clearField();
            } else {
                appendValue(value);
            }
        });
    });

    let button1 = document.querySelector(".button1");
    button1.addEventListener("click", function () {
        appendValue("0");
    });

    // Event listener for Clear button
    let clearButton = document.querySelector(".button2");
    clearButton.addEventListener("click", function () {
        clearField();
    });
});
