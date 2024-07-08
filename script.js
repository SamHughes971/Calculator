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

const numOne = 8
const numTwo = 3
const operator = '-'

operate(numOne, numTwo, operator);