const alunos = [
    {
        nome: 'Paula',
        nota: 7,
    },
    {
        nome: 'Júlia',
        nota: 5,
    },
    {
        nome: 'Fernando',
        nota: 9,
    },
    {
        nome: 'Lucas',
        nota: 10,
    }
];

function alunosAp(alunos, mediaFinal){
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++){
        let {nome, nota} = alunos[i];
        if(nota >= mediaFinal){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAp(alunos, 7));
// [ 'Paula', 'Fernando', 'Lucas']