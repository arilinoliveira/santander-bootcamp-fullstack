class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0
    }

    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Saldo insuficiente!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
};

class contaCorrente extends contaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança'
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança'
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada!"
        }
    }
}
