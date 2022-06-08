//1 - Some todos os números de um array
function soma(array){
   return array.reduce((prev, current) => prev + current)
}
const myArr = [1, 3, 5]

console.log(soma(myArr));

//2 - com valor inicial
function soma2(array, saldo){
   return array.reduce(function(prev, current){
      return prev - current
   }, saldo)
}

const myArr2 = [10, 20];
const saldo = 100;

console.log(soma2(myArr2, saldo));
