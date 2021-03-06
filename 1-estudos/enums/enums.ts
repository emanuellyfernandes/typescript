////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Enum โก

enum Idioma{
    Portugues,
    Espanhol,
    Ingles,
    Frances
};

console.log(Idioma);   // ๐ถ๐ฟรก ๐ฎ๐ฟ๐บ๐ฎ๐๐ฒ๐ป๐ฎ๐ฟ ๐๐ฎ๐น๐ผ๐ฟ๐ฒ๐ ๐ฐ๐ผ๐บ๐ผ ๐ป๐๐บ๐ฒ๐ฟ๐ผ๐โก


////////////////////////////////////////////////////////////////////////////////////////////////////


enum Dia{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA'
};

console.log(Dia);
console.log(Dia.Quarta);



////////////////////////////////////////////////////////////////////////////////////////////////////


const enum Comida{
    Hamburguer,
    Massa,
    Pizza,
    Churrasco
}

function comida(c:Comida){
    return ' Comidas muito apetitosas! ';
}

console.log(comida(Comida.Pizza));


////////////////////////////////////////////////////////////////////////////////////////////////////

enum Tarefa{
    Todo,
    Progress,
    Done
}

const concluidoTarefa = {
    id:1,
    status: Tarefa.Done,
    descricao: 'Parabรฉns'
};

if(concluidoTarefa.status == Tarefa.Done){
    console.log(concluidoTarefa.descricao)
};
