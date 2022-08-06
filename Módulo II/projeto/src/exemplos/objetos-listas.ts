const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}


const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática Discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 28,
    materias: ['Matemática Discreta', 'Programação']
}


function listar(lista: string[]) {
    for(const item of lista){
        console.log(' -', item)
    }
}

listar (monica.materias);