let firstValue = '';
let secondValue = '';
let operator;
let changingFirstValue = true;
let changingSecondValue = false;

function updatePanel(){
  
  if (changingFirstValue){
  panel.textContent = firstValue;
  } else {
  panel.textContent = firstValue + operator + secondValue;
  }
  
}

function operate(a,operator,b){
  
    switch(operator){
            case "*":
              firstValue = multiply(a,b);
              break;
              
            case "/":
              firstValue = divide(a,b);
              break;
              
            case "+":
              firstValue = sum(a,b);
              break;
              
            case "-":
              firstValue = subtract(a,b);
              break;
    }
  
}

function sum(a,b){
    let added = a+b;
    added = Math.round(added * 100) / 100;
    return added;
}

function subtract (a,b){
    let subtracted = a-b;
    divided = Math.round(subtracted * 100) / 100;
    return subtracted;
}

function divide (a,b){
    let divided = a/b;
    divided = Math.round(divided * 100) / 100;
    return divided;

}

function multiply (a,b){
    let multiplied = a*b;
    multiplied = Math.round(multiplied * 100) / 100;
    return multiplied;
}

const buttons = document.querySelectorAll("button");
const panel = document.querySelector("#panel");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        if(e.target.id == "clear"){
          changingFirstValue = true;
          firstValue = '';
          secondValue = '';
          panel.textContent = 0;
          return;
        }
      
        if(e.target.className=="operator"){
          if(changingFirstValue === false){
          operate(Number(firstValue),operator,Number(secondValue));
          secondValue = '';
          operator = button.textContent;
          updatePanel()
          return;
          }
          
          changingFirstValue = false;
          operator = button.textContent;
          updatePanel();
          return;
        } 
      
        if(e.target.id=="enterButton"){
          operate(Number(firstValue),operator,Number(secondValue));
          changingFirstValue = true;
          secondValue = '';
          updatePanel()
          return;
        }
    
      
        if(changingFirstValue){
          firstValue = String(firstValue) + button.textContent;
        } else {
          secondValue = String(secondValue) + button.textContent;
        }
      
        updatePanel();
    });
});
