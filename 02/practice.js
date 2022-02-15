function calculate(numberOne, numberTwo, operation, view){
    const result = operation(numberOne, numberTwo);
    if(view){
    view(result)
    } else {
    return result;
    }
}

function bareView(input){
    console.log(input);
}

let  commentedView = (input) => //=> ist nicht return sondern mach was nach => kommt - daher geht console.log hier
    console.log(
    `Das Ergebnis ist: ${input}!`
    )


function buildSum(numberOne, numberTwo){
    const result = numberOne + numberTwo;
    return result;
}

let add = (numberOne, numberTwo) => numberOne+numberTwo;

calculate(1,3, buildSum);

calculate(1,3, buildSum, bareView);

calculate(2,3, add, bareView);

calculate(5,8, add, commentedView);

calculate(
    9,
    3,
    (a,b) => a/b,
    commentedView
);

calculate(
    4,
    7,
    function(a,b){
    return a * b;
    },
    input => console.log(`Dies ist das Resultat: ${input}`)
);