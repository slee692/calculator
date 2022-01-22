function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function operate(operator, num1, num2) {
    result = 0;
    if (operator == "+") {
        result = add(num1, num2);
    } else if (operator == "-") {
        result = subtract(num1, num2);  
    } else if (operator == "*") {
        result = multiply(num1, num2);  
    } else if (operator == "/") {
        result = divide(num1, num2);
    }
    return result;
}

let currentOperand = "";
let prevOperand = "";
let operator = "";
let pressedEquals = false;
let display = document.getElementById('display'); //grab display from html

function chooseOperation(input) {
    operator = input;
    prevOperand = currentOperand;
    currentOperand = "";
}
function compute(operator) {
    let answer;
    switch(operator) {
        case "+":
            answer = operate("+", parseFloat(prevOperand), parseFloat(currentOperand));
            break;
        case "-":
            answer = operate("-", parseFloat(prevOperand), parseFloat(currentOperand));
            break;
        case "*":
            answer = operate("*", parseFloat(prevOperand), parseFloat(currentOperand));
            break;
        case "/":
            answer = operate("/", parseFloat(prevOperand), parseFloat(currentOperand));
            break;
    }
    currentOperand = answer;
    operator = "";
    prevOperand = "";
}

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener("click", (e) => {
        //e is the event
        //e.target is the button that was clicked
        //e.target.innertext gets the text of the button
        switch(e.target.innerText) {
            case ("clear"):
                display.innerText = " ";
                prevOperand = "";
                currentOperand = "";
                operator = "";
                break;
            case ("+"):
                display.innerText += "+";
                if (prevOperand != "") {
                    compute(operator);
                }
                chooseOperation("+");
                break;
            case ("-"):
                display.innerText += "-";
                if (prevOperand != "") {
                    compute(operator);
                }
                chooseOperation("-");
                break;
            case ("*"):
                display.innerText += "*";
                if (prevOperand != "") {
                    compute(operator);
                }
                chooseOperation("*");
                break;
            case ("/"):
                display.innerText += "/";
                if (prevOperand != "") {
                    compute(operator);
                }
                chooseOperation("/");
                break;
            case("="):
                compute(operator);
                display.innerText = currentOperand;
                prevOperand = "";
                currentOperand = "";
                operator = "";
                pressedEquals = true;
                break;
            default:
                if (pressedEquals) {
                    pressedEquals = false;
                    display.innerText = "";
                    prevOperand = "";
                    currentOperand = "";
                    operator = "";
                }
                currentOperand += e.target.innerText;
                display.innerText += e.target.innerText;
                
        }
    });
});
