//com This
const par = {
    value: 2,
}

const impar = {
    value: 3,
}

function multiplier(array, thisArg){
    return array.map(function(numero){
       return numero * this.value;
    }, thisArg);
}

const myNumbers = [1, 2];

console.log(multiplier(myNumbers, par));
console.log(multiplier(myNumbers, impar));

//sem This
function multiplier(array){
    return array.map((numero) => numero * 2);
}

const myNumbers2 = [3, 4];

console.log(multiplier(myNumbers2));

