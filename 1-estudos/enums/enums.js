"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////
//* ==> Exemplo Enum โก
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
console.log(Idioma); // ๐ถ๐ฟรก ๐ฎ๐ฟ๐บ๐ฎ๐๐ฒ๐ป๐ฎ๐ฟ ๐๐ฎ๐น๐ผ๐ฟ๐ฒ๐ ๐ฐ๐ผ๐บ๐ผ ๐ป๐๐บ๐ฒ๐ฟ๐ผ๐โก
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
    descricao: 'Parabรฉns'
};
if (concluidoTarefa.status == Tarefa.Done) {
    console.log(concluidoTarefa.descricao);
}
;
