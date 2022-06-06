//Solução 1
function verificarPalindromo1(string){
    if(!string) return "String inexistente!";

    return string.split("").reverse("").join("") === string;
}

console.log(verificarPalindromo1('gato'));

//Solução 2
function verificarPalindromo2(string){
    if (!string) return "String inexistente!";
    if (!string.length) return "String inexistente!";


    for (i = 0; i < string.length / 2; i++){
       return string[i] === string[string.length -1 -i];
    }
}

console.log(verificarPalindromo2('asa'));