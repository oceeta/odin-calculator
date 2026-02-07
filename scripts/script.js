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

buttons.addEventListener("click", function(e) {
    const isButtonContainer = e.target.classList[0] === "buttons" || 
                                e.target.classList[0] === "clear-buttons" || 
                                e.target.classList[0] === "nums-and-ops" || 
                                e.target.classList[0] === "button-row";

    const isOperator = e.target.textContent === "/" ||
                        e.target.textContent === "x" ||
                        e.target.textContent === "-" ||
                        e.target.textContent === "+";

    const isEqualsTo = e.target.textContent === "=";

    const isAllClear = e.target.textContent === "AC";
    
    const isDEL = e.target.textContent === "DEL";

    const isNumber = !(isButtonContainer || isOperator || isEqualsTo || isAllClear || isDEL);

    if (isNumber && operator === "") {
        num1 += e.target.textContent;
        display.value = num1;
    }

    if (num1 !== "" && operator !== "" && num2 !== "") {
        if (isOperator) {
            display.value = "";
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            display.value = operate(operator, num1, num2);
            num1 = display.value;
            operator = e.target.textContent;
            num2 = "";
        } else if (isEqualsTo) {
            display.value = "";
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            display.value = operate(operator, num1, num2);
            num1 = "";
            operator = "";
            num2 = "";
        }
    }

    if (isOperator && num1 !== "" ) {
        operator = e.target.textContent;
    }

    if (isNumber && num1 !== "" && operator !== "") {
        display.value = "";
        num2 += e.target.textContent;
        display.value = num2;
    }

    // Clear display and "backspace"
    if (isAllClear) {
        num1 = "";
        num2 = "";
        operator = "";
        display.value = "";
    } else if (isDEL && operator !== "") {
        let num2ToArray = num2.split("");
        num2ToArray.pop();
        num2 = num2ToArray.join("");
        display.value = num2;
    } else if (isDEL && operator === "") {
        let num1ToArray = num1.split("");
        num1ToArray.pop();
        num1 = num1ToArray.join("");
        display.value = num1;
    }
});
