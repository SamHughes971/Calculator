const numberButton = document.querySelectorAll('.number-btn');
const operatorButton = document.querySelectorAll('.operator-btn');

const display = document.querySelector('.display')
numberButton.forEach(e => e.style.backgroundColor= 'green');
operatorButton.forEach(e => e.style.backgroundColor= 'lightblue');

// display.textContent = 'random'

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

function operatorValue(){
    operatorButton.forEach(element => {
        element.addEventListener('click', e =>{
            const clicked = e.target;
            console.log(clicked.innerText)
        })
    })

}
operatorValue()

let displayNum1 = []  // hold value of string
let displayNum2 = []
//If flag is true -> allow displayNum1 to retrieve value. IF false -> allow displayNum2 to retrieve values
function displayValue(flag){
    numberButton.forEach(element => {
        element.addEventListener('click', e => {
            const clicked = e.target;
            display.innerText += clicked.textContent //allow concat of value
            if(flag){
                displayNum1.push(display.innerText)
                console.log(`num1: ${displayNum1}`)
            }
            if(!flag){
                displayNum2.push(display.innerText)
                console.log(`num2: ${displayNum2}`)
            }
        })
    });
    
}
// test1 = ["23", "32", "22"]
// test2 = ["23", "32", "33"]
function calculate(){
    let flag = true
    displayValue(flag)
    let num1 = parseInt(displayNum1[displayNum1.length - 1]);
    let num2 = parseInt(displayNum2[displayNum2.length - 1]);
    operator = '+'
    console.log(displayNum1, displayNum2)
    operate(num1, num2, operator)

}

calculate()



// const numOne = 8
// const numTwo = 3
// const operator = '-'

// operate(numOne, numTwo, operator);