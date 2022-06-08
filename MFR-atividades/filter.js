const myNumbers = [1, 2, 5, 6, 11, 17, 20, 75, 90]

function pares(){
    return myNumbers.filter((numero) => numero % 2 === 0);
}

console.log(pares(myNumbers));
// [ 2, 6, 20, 90]