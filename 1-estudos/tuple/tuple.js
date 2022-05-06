"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo Tupla
let pessoa;
pessoa = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa);
console.log(...pessoa);
//ou
let pessoa2 = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa2);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Tupla ( Acessando valor pela posição )
let pessoa1;
pessoa1 = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa1[1]);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Tupla com labels (declara o primeiro elemento como string e o ultimo como string )
let listaFrutas = ['🍌', '🍍', '🍎', '🍓'];
console.log(listaFrutas);
console.log(...listaFrutas);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Tupla ( lista heterogenea )
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Tupla ( Função )
function listaPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
;
let resultado = listaPessoas(['Emanuelly', 'Duany'], [25, 32]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Emanuelly', 'Fernandes'));
console.log(criarPessoa('Emanuelly', 'Marin', 'Fernandes'));
