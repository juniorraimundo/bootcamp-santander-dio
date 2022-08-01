function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'João',
    idade: 25,
};

const animal = {
    nome: 'Pet',
    idade: 5,
    raça: 'Vira-Lata',
};

console.log(calcularIdade.apply(pessoa1, [5]));