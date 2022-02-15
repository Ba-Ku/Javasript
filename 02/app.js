function calculate(nr1, nr2, operation){
    const result = operation( nr1 , nr2 );
    return result;
}

function operateSum(a,b){
    return a+b;
}

const result1 = calculate(1, 3, operateSum);
console.log(result1);

const result2 = calculate(1, 3, function(a,b){ //anonyme Funktion - ist das gleiche wie oben.
    return a+b;
});
console.log(result2);

const result3 = calculate(1, 3, (a,b)=>{ //arrow Funktion - ist das gleiche wie oben result 2 nur eine andere schreibweise.
    return a+b;
});
console.log(result3);

const result4 = calculate(1, 3, (a,b)=>a+b) /*arrow Funktion - lamba funktion - folgt dem arrow ein einzeiler, 
kann man die geschwungen klammern weglassen - dann muss aber auch das semikolon weg und das return. diese variante ist zu bevorzugen.*/
console.log(result4);

const add = (x, y, z) => x + y + z;
console.log(add);

function calculateCallback(nr1, nr2, operation, callback){
    const result5 = operation( nr1 , nr2 );
    if(callback){//truthy - überprüft ob parameter einen wert hat
        callback (result5) //wenn ein callback übergeben wird, wird diese funktion ausgeüfhrt. ansonsten wird operationSum durchgeführt.
    }
    return result5;
}

function showResult(result){
    console.log("result: " + result);
}

const result6 = calculateCallback(1,3, operateSum , showResult);

