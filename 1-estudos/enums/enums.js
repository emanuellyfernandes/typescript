"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////
//* ==> Exemplo Enum ⁡
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
console.log(Idioma); // 𝗶𝗿á 𝗮𝗿𝗺𝗮𝘇𝗲𝗻𝗮𝗿 𝘃𝗮𝗹𝗼𝗿𝗲𝘀 𝗰𝗼𝗺𝗼 𝗻𝘂𝗺𝗲𝗿𝗼𝘀⁡
////////////////////////////////////////////////////////////////////////////////////////////////////
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
})(Dia || (Dia = {}));
;
console.log(Dia);
console.log(Dia.Quarta);
function comida(c) {
    return ' Comidas muito apetitosas! ';
}
console.log(comida(2 /* Pizza */));
////////////////////////////////////////////////////////////////////////////////////////////////////
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidoTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns'
};
if (concluidoTarefa.status == Tarefa.Done) {
    console.log(concluidoTarefa.descricao);
}
;
