const numberButton = document.querySelectorAll('.number-btn');
const operatorButton = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('.equals-btn');
const clearButton = document.querySelector('.clear-btn');
const decimalButton = document.querySelector('.decimal-btn');

const display = document.querySelector('.display')
equalButton.style.backgroundColor = "red";
numberButton.forEach(e => e.style.backgroundColor= 'green');
operatorButton.forEach(e => e.style.backgroundColor= 'lightblue');

function addition(numOne, numTwo){
    return numOne + numTwo;
}
function subtract(numOne, numTwo){
    return numOne - numTwo
}
function multiply(numOne, numTwo){
    return numOne * numTwo
}
function divide(numOne, numTwo){
    if(numTwo == 0){
        return display.textContent = 'Cannot divide by 0';
    } else return numOne / numTwo;
}

function operate(numOne, numTwo, operator){
    let result;
    switch(operator){
        case '+': result = addition(numOne, numTwo);
        break;

        case '-': result = subtract(numOne, numTwo);
        break;

        case '*': result = multiply(numOne, numTwo);
        break;

        case '/': result = divide(numOne, numTwo);
        break;
    }
    return result
}

let firstNum = '';  // hold value of string
let secondNum = '';
let operatorSign = ''; // holds operator value


operatorButton.forEach(element => {
    element.addEventListener('click', e =>{
        operatorSign = e.target.innerText;
        display.innerText += e.target.textContent
        console.log(operatorSign)
        })
})

decimalButton.addEventListener('click', e=>{
    operatorSign = e.target.innerText;
    display.innerText += e.target.textContent

})
numberButton.forEach(element => {
    element.addEventListener('click', e => {
        display.innerText += e.target.textContent //allow concat of value
        if(operatorSign === ''){
            firstNum += e.target.innerText;
            console.log(firstNum)
        }
        else{
            secondNum +=e.target.innerText
            console.log(secondNum)
        }})})

equalButton.addEventListener('click', () => {
    firstNumClean = parseInt(firstNum);
    secondNumClean = parseInt(secondNum);

    let operateResult = operate(firstNumClean, secondNumClean, operatorSign)
    display.innerText = operateResult;

    firstNum = operateResult;
    secondNum = '';
})

clearButton.addEventListener('click', ()=>{
    display.innerText = '';
    firstNum = '';  
    secondNum = '';
    operatorSign = ''
})

