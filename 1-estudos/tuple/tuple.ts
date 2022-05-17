////////////////////////////////////////////////////////////////////////////////////////////////////

import { NumericLiteral } from "typescript";

//* ==> Exemplo Tupla

let pessoa: [string, string, number];

pessoa = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa);
console.log(...pessoa);

//ou

let pessoa2:[nome:string, sobrenome:string, idade:number] = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa2);




////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Tupla ( Acessando valor pela posição )


let pessoa1: [string, string, number];

pessoa1 = ['Emanuelly', 'Fernandes', 25];
console.log(pessoa1[1]);




////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Tupla com labels (declara o primeiro elemento como string e o ultimo como string )

let listaFrutas:[string, ...string[]] = ['🍌', '🍍', '🍎', '🍓'];

console.log(listaFrutas);
console.log(...listaFrutas);




////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Tupla ( lista heterogenea )

let listaFrutas2: [Number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);



////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Tupla ( Função )


function listaPessoas(nomes:string[], idades:number[]){

    return [...nomes, ...idades];

};

let resultado = listaPessoas(['Emanuelly','Duany'] , [25, 32]);

console.log(resultado);



////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Tupla 

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomedoMeio: string, sobrenome:string]


function criarPessoa(...nome:Nome){
    return[...nome];
}

console.log(criarPessoa('Emanuelly','Fernandes'));

console.log(criarPessoa('Emanuelly','Marin', 'Fernandes'));