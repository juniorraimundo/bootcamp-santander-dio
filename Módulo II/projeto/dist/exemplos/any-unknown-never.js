"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTeste = 'Verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogarErro('Deu erro!!!', 500);
