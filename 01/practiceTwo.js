const division = (numberOne, numberTwo) => numberOne / numberTwo;
let resultOne = division(6,3);
console.log(resultOne);

const calculateTwoNumbers = (numberOne, numberTwo) =>
{
    let add = numberOne + numberTwo;
    let subtract = numberOne - numberTwo;
    let multiply = numberOne * numberTwo;
    let divide = numberOne / numberTwo;

    return{
        sum: add,
        subtraction: subtract,
        multiplication: multiply,
        division: divide
    }
}

let resultTwo = calculateTwoNumbers(9,5);
console.log(resultTwo.division);

const calculateTwoNumbersWithCallbacks = (numberOne, numberTwo, operation, view) =>
{
    const result = operation(numberOne, numberTwo);

    if(view){
        view(result);
    } else {
        return result;
    }
}
const consoleView = (input) => console.log(`The result is: ${input}.`);

let resultThree = calculateTwoNumbersWithCallbacks(6,2, division, consoleView);

