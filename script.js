let firstValue = 0;
let secondValue = '';
let operator;
let changingFirstValue = true;
let changingSecondValue = false;
const buttons = document.querySelectorAll("button");
const panel = document.querySelector("#panel");

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
            if(b==0){
               alert("Error: impossible to divide by 0")
               break;
            }
              firstValue = divide(a,b)
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

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //clearPanel(event); - could include what parameters for better readability?
        if(e.target.id == "clear"){
            changingFirstValue = true;
            firstValue = 0;
            secondValue = '';
            operator='';
            updatePanel();
            return;
        }
        
        //checkLoneZero(event);
        if (panel.textContent == '0' && e.target.className=="number"){
          panel.textContent = button.textContent;
          firstValue = button.textContent;
          return 
        }
      
        //checkOperator(event)
        if(e.target.className == "operator"){
          if(changingFirstValue === false && secondValue != ''){
            operate(Number(firstValue),operator,Number(secondValue));
            secondValue = '';
            operator = button.textContent;
            return;
            updatePanel();
          }
          changingFirstValue = false;
          operator = button.textContent;
          updatePanel();
          return;
        } 
    
        //checkResult(event);
        if(e.target.id=="enterButton"){
          operate(Number(firstValue),operator,Number(secondValue));
          changingFirstValue = true;
          secondValue = '';
          operator = '';
          updatePanel();
          return;
        } else {

        }
        
        //addDigits(digit);
        if(changingFirstValue){
          firstValue = String(firstValue) + button.textContent;
        } else {
          if(secondValue === '0'){
            secondValue = button.textContent;
          } else{
                secondValue = String(secondValue) + button.textContent;
            }
          }
      
        updatePanel();
    });
});
