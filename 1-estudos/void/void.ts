function olaMundo():void {
    console.log('Olá Mundo');
};

//--------Outra forma de criar funções com arrow function

const olaMundo2 = () => {
    console.log('Olá Mundoo');
};


olaMundo();

olaMundo2();

//---------------------------------

function logError(errorMessage: string): void{
    console.log(errorMessage);
};

logError('Required field - Name:');

//----------------------------------------

const logError2 = (errorMessage: string):void =>{
    console.log(errorMessage);
};

logError2('Required field - Name:');


//-----------------------------------------------

//==> void em variaveis

let variavelEx:void;

//variavelEx = 1;          ->inválida

variavelEx = null;

variavelEx = undefined;

console.log(variavelEx);


