


const pessoa = {
    nome:'Emanuelly',
    sobrenome:'fernandes',
    idade:25,
    funcao:'assistente'
};

console.log(pessoa);


/////////////////////////////////////////////////////////////////////////////////////

function onBor(funcionario:{nome:string}){
    return'seja bem vinda ' + funcionario.nome;
}

console.log(onBor({nome:'Emanuelly'} ));

/////////////////////////////////////////////////////////////////////////////////////////

//* object nomeados



interface Pessoa{
    nome: string;
    funcao: string;
}


function onBor2(pessoa:Pessoa){
    return(
        'Seja Bem vinda ' + 
        pessoa.nome +
        '!' +
        'Sua função: ' +
        pessoa.funcao +
        '.'
    )
};

console.log(onBor2({nome:'Lizy' , funcao:'Analista'}));


//////////////////////////////////////////////////

type Pessoa3 = {
    nome:string;
    funcao:string;
    linguagem:string;
};

function onBor3(pessoa1:Pessoa3){
    return(
        'Seja Bem vinda ' + 
        pessoa1.nome +
        '!' +
        'Sua função: ' +
        pessoa1.funcao +
        '. Sua linguagem: ' +
        pessoa1.linguagem
    )
};

console.log(onBor3({nome:'Lizy' , funcao:'Analista' , linguagem:'java'}));



/////////////////////////////////////////////////////////////////////


//* usando optional object

interface Pessoa4{
    nome: string;
    sobrenome:string;
    linguagem?:string;   //?  ?significa opcional
}

function on1(pessoas:Pessoa4){
    return(
        'nome: ' + pessoas.nome + ' sobrenome: ' + pessoas.sobrenome + ' linguagem: ' + pessoas.linguagem
    );
};

console.log(on1({nome: 'Emanuelly' , sobrenome:'Fernandes'}));


//////////////////////////////////////////////////////////////////////////////////////


interface Pessoa5{
    nome: string;
    sobrenome:string;
    readonly linguagem:string;   //?  readonly significa que agnt nao vai poder fazer nenhuma modificação
}

function on2(pessoal:Pessoa5){
    return(
        'nome: ' + pessoal.nome + ' sobrenome: ' + pessoal.sobrenome + ' linguagem: ' + pessoal.linguagem
    );
};

console.log(on2({nome: 'Emanuelly' , sobrenome:'Fernandes', linguagem:'java'}));


///////////////////////////////////////////////////////

interface Mae{
    nome:string;
}

interface Pai{
    sobrenome:string;
}

interface Filha extends Mae , Pai{
    idade:number;
}

const filha: Filha = {
    nome:'Emanuelly',
    sobrenome:'Fernandes',
    idade: 25
}

console.log(filha);


/////////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////////////

