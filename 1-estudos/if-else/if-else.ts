export{};   //? para poder usar variaveis que já foram usadas

const max = 100;
let counter = 10;

if(counter < max){
    counter++;
}

console.log(counter);

///////////////////////////////////////////////////////////////

const numeroMax = 100;
let contador = 100;

if(contador > numeroMax){
    contador++
}

console.log(contador);


////////////////////////////////////////////////////////////////

const permissaoIdadeDirigir = 18;

let idade:number = 15;

if(idade >= permissaoIdadeDirigir ){
    console.log('Pode dirigir');
}else{
    console.log('Não pode dirigir');
}

///////////////////////////////////////////////////////////////////

let desconto:number;

let valorCompra:number = 1;

if(valorCompra > 0 && valorCompra <= 5){
    desconto = 5;
}else if (valorCompra > 5 && valorCompra <= 10){
    desconto = 10;
}else{
    desconto = 15;
}

console.log('Você recebeu um desconto de: ', desconto);

                                                                                                            
/////////////////////////////////////////////////////////////////




