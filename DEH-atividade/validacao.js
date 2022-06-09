function validacaoErr(array, num){
    try{
        if (!array && !num){
            throw new ReferenceError("Parâmetros inválidos!");
        }
        if (typeof array !== 'object'){
            throw new TypeError("Array inválida!");
        }
        if (typeof num !== 'number') {
            throw  new TypeError("Número inválido!");
        }
        if (array.length !== num) {
            throw new RangeError("Tamanho inválido!");
        }
    } catch(e){
        if(e instanceof RangeError){
            console.log('RangeError!');
            console.log(e.stack);
        }

        if(e instanceof ReferenceError){
            console.log('ReferenceError!');
            console.log(e.stack);
        }
    }
}

console.log(validacaoErr([1, 2, 3], 0));