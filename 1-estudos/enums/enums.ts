////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==> Exemplo Enum ⁡

enum Idioma{
    Portugues,
    Espanhol,
    Ingles,
    Frances
};

console.log(Idioma);   // 𝗶𝗿á 𝗮𝗿𝗺𝗮𝘇𝗲𝗻𝗮𝗿 𝘃𝗮𝗹𝗼𝗿𝗲𝘀 𝗰𝗼𝗺𝗼 𝗻𝘂𝗺𝗲𝗿𝗼𝘀⁡


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
    descricao: 'Parabéns'
};

if(concluidoTarefa.status == Tarefa.Done){
    console.log(concluidoTarefa.descricao)
};
