function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Tereza',
    idade: 60,
}

const pessoa2 = {
    nome: 'Stela',
    idade: 46,
}

const pessoa3 = {
    nome: 'João',
    idade: 41,
}

console.log(calculaIdade.apply(pessoa3, [10]));