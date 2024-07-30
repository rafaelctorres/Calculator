function operate(a,operator,b){
    switch(operator){
        case "/": return divide(a,b);
        case "*": return multiply(a,b);
        case "+": return sum(a,b);
        case "-": return subtract(a,b);
    }
}

function sum(a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function divide (a,b){
    return a/b;
}

function multiply (a,b){
    return a*b;
}

const buttons = document.querySelectorAll("button");
const panel = document.querySelector("#panel");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        panel.textContent = panel.textContent + button.textContent;
    });
});