const buttons = document.querySelector('.buttons')
const input = document.querySelector('.display input')
const removeInput = document.querySelector('.operation.remove')
const clearInput = document.querySelector('.operation.clear')

clearInput.addEventListener('click', clear)
removeInput.addEventListener('click', remove)
buttons.addEventListener('click', (e) => {
        let target = e.target;
        if (target.tagName === 'BUTTON') {
            displayInput(e.target);
        }
    });

let num1;
let num2;
let operation;    
let isDivisonByZero = false;
let chaining = false;
    
function displayInput(button) {

    if (chaining) {
        input.value = '';
        chaining = false;
    }

    if (isDivisonByZero) {
        clear();
        isDivisonByZero = false;
    }

    let currentContent = button.textContent

    if (!isNaN(Number(currentContent))) {
        if (operation === undefined) {
            num1 += currentContent;
        } else {
            num2 += currentContent;
        }
        input.value += currentContent;
    }
    else if (currentContent === '.' && !input.value.includes('.')) {
        if (operation === undefined) {
            num1 += currentContent;
        } else {
            num2 += currentContent;
        }
        input.value += currentContent;
    }
    else if (['+', '-', '*', '/', '%'].includes(currentContent) && num1 !== undefined) {
        if (num2 !== undefined) {
            evaluate(num1, num2, operation);
            operation = currentContent;
            chaining = true;
            return
        }
        operation = currentContent;
        input.value = '';
    }
    else if (currentContent === '=') {
          evaluate(num1, num2, operation);
    }
}

function evaluate(n1, n2, op) {
    if (n1 !== undefined && n2 !== undefined && op !== undefined) {
        n1 = n1.replace('undefined', '')
        n2 = n2.replace('undefined', '')
        const result = operate(Number(n1), Number(n2), op);
        if (isDivisonByZero) {
            input.value = "Can't divide by zero!"
        }
        else {
            const rounded = Number(result.toFixed(10));
            input.value = rounded;
            num1 = rounded.toString();
            num2 = undefined;
            operation = undefined;
        }
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
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function remove() {
    input.value = input.value.slice(0, -1);
    if (operation === undefined) {
        num1 = input.value 
    }
    else {
        num2 = input.value
    }
}

function clear() {
    input.value = ''
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return add(a, b);
        
        case '-':
            return subtract(a, b);
        
        case '*':
            return multiply(a, b);
            
        case '/':
            if (b == 0) {
                isDivisonByZero = true;
                return;
            }
            return divide(a, b);

        case '%':
            return mod(a, b);
    
        default:
            console.log('Invalid operation')
    }
}



