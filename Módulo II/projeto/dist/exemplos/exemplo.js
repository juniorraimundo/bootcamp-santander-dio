"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resutado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resutado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
