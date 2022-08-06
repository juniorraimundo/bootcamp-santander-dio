let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'Verificar'
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';

if (typeof unknownValor === 'string'){
    stringTeste2 = unknownValor;
}

function jogarErro(erro: string, codigo: Number): never {
    throw {error: erro, code: codigo};
}
jogarErro('Deu erro!!!', 500)