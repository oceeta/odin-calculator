let num1 = "";
let num2 = "";
let operator = "";

const display = document.querySelector("input");
const buttons = document.querySelector(".buttons");

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}
