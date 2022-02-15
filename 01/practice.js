function calculateSum(sum1, sum2){
    const result = sum1 + sum2;
    return result;
}

const resultOne = calculateSum(1,4);
console.log(resultOne);

let calculateSumViaVaraiable = function(sum1, sum2){
                                   const result = sum1 + sum2;
                                   return result;
                               }

const resultTwo = calculateSumViaVaraiable(2, 2);
console.log(resultTwo);

let calculateSumAsArrowFunction = (sum1, sum2) => sum1 + sum2;
let resultThree = calculateSumAsArrowFunction(5,6);
console.log(resultThree);

function calculateAndReturnAnObject(numberOne, numberTwo){
    let sum = numberOne + numberTwo;
    let subtract = numberOne - numberTwo;
    let multiply = numberOne * numberTwo;
    let divide = numberOne / numberTwo;
    let average = sum / 2
    return {
        sum: sum,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        average: average
    }
}
const resultFour = calculateAndReturnAnObject(4, 2);
console.log(resultFour.sum);
console.log(
`Summe: ${resultFour.sum}
Subtraktion: ${resultFour.subtract}
Multiplikation: ${resultFour.multiply}
Division: ${resultFour.divide}
Durchschnitt: ${resultFour.average}
`);

console.log(`Hello
World!

This this
a test.`)


