function calculateSum(a, b){
    let sum = a + b;
    return sum;
}

const result1 = calculateSum(1,3);
console.log('Summe: ' + result1 );

console.log("\n");
/*-------------------------------------------------------------*/
let person = { //das nennt man ein Objektliteral
    firstName: 'Markus'
}
person.lastname = 'Huber'; //so kann man das literal erweitern
/*-------------------------------------------------------------*/
function calculateSumAndAverage(a, b){
    let sum = a + b;
    let result = {
        sum : sum,
        avg : sum / 2
    }
    return result;
}

const result = calculateSumAndAverage(1,3);
console.log('Summe: ' + result.sum + ' Durchschnitt: ' + result.avg);

console.log("\n");

console.log(
`Summe: ${result.sum}
Durchschnitt: ${result.avg}`);

