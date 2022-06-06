var num1 = 0;
var num2 = 0;
var soma = 0;


function equal(num1, num2){
    if (num1 === num2){
        return "Os números " + num1 + " e " + num2 + " são iguais. ";
    } else {
        return "Os números " + num1 + " e " + num2 + " não são iguais. ";
    }
}

function biggerSmaller(num1, num2){
    let soma = num1 + num2;

    if (soma < 10){
        return "Sua soma é " + soma + ", que é menor que 10 e menor que 20.";
    }
    if (soma === 10){
        return "Sua soma é " + soma + ", que é igual a 10 e menor que 20.";
    }
    if (soma === 20){
        return "Sua soma é " + soma + ", que é maior que 10 e igual a 20.";
    }
    if (10 < soma < 20){
        return "Sua soma é " + soma + ", que é maior que 10 e menor que 20.";
    }
    if (soma > 20){
        return "Sua soma é " + soma + ", que é maior que 10 e maior que 20.";
    }
}

function result(num1, num2){
    if(!num1 || !num2) return "Defina dois números!"
    return equal(num1, num2) + biggerSmaller(num1, num2);
}

console.log(result());