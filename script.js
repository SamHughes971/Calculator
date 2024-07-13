const numberButton = document.querySelectorAll('.number-btn');

const display = document.querySelector('.display')
numberButton.forEach(e => e.style.backgroundColor= 'green');

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



let x = []
let displayNum = []
function displayValue(){
    numberButton.forEach(element => {
        element.addEventListener('click', e => {
            
            const clicked = e.target;
            display.innerText += clicked.textContent
            displayNum.push(display.innerText)
            
        })
    });
    
}

displayValue()

// let y = x.map(e => e.join(''))
// console.log(y)
console.log(displayNum)




// const numOne = 8
// const numTwo = 3
// const operator = '-'

// operate(numOne, numTwo, operator);