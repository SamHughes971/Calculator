const numberButton = document.querySelectorAll('.number-btn');
const operatorButton = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('.equals-btn');

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
    return numOne / numTwo
}

function operate(numOne, numTwo, operator){
    switch(operator){
        case '+': console.log(addition(numOne, numTwo));
        break;

        case '-': console.log(subtract(numOne, numTwo));
        break;

        case '*': console.log(multiply(numOne, numTwo));
        break;

        case '/': console.log(divide(numOne, numTwo));
        break;
    }
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

numberButton.forEach(element => {
    element.addEventListener('click', e => {
        display.innerText += e.target.textContent //allow concat of value
        if(operatorSign === ''){
            firstNum += e.target.innerText;
            console.log(firstNum)
            console.log(typeof firstNum)
        }
        else{
            secondNum +=e.target.innerText
            console.log(secondNum)
            console.log(typeof secondNum)

        }})})

equalButton.addEventListener('click', () => {
    firstNumClean = parseInt(firstNum);
    secondNumClean = parseInt(secondNum);

    operate(firstNumClean, secondNumClean, operatorSign)

})








// const numOne = 8
// const numTwo = 3
// const operator = '-'

