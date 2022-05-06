"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo usando Colchetes
let frutas = ['abacaxi', 'laranja', 'maca'];
console.log(frutas[0]);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Array Object
let frutas1 = ['abacaxi', 'laranja', 'maca'];
console.log(frutas1[0]);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo adicionando com metodo push (adiciona no final)
let idiomas = ['ingles', 'frances', 'espanhol'];
console.log(idiomas);
idiomas.push('italiano');
console.log(idiomas);
// ==> Tamanho do array
console.log(idiomas.length);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo com Spread Operator  (continua de onde parou)
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9];
console.log(listaNumeros);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo com laços de iteração
let linguagensArrays = new Array('javascript', 'phyton', 'php');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArrays[i]);
    }
}
funcaoLinguagens(linguagensArrays);
