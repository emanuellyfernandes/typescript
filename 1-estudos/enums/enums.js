"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////
// ==> Exemplo Enum ⁡
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
console.log(Idioma); // 𝗶𝗿á 𝗮𝗿𝗺𝗮𝘇𝗲𝗻𝗮𝗿 𝘃𝗮𝗹𝗼𝗿𝗲𝘀 𝗰𝗼𝗺𝗼 𝗻𝘂𝗺𝗲𝗿𝗼𝘀⁡
var Frutas;
(function (Frutas) {
    Frutas["Melancia"] = "M";
    Frutas["Espanhol"] = "E";
})(Frutas || (Frutas = {}));
;
console.log(Frutas.Espanhol);
