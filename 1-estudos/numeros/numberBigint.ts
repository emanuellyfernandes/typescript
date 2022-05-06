////////////////////////////////////////////////////////////////////////////////////////////////////

// ==> Exemplo Number

/* let num1:number = 14.0;      //number
let num2:number = 0x37cf;    //hexadecimal
let num3:number = 0o377;     //octal
let num4:number = 0b111001;  //binary
*/

// ==> Exemplo Bigint

//let big1:bigint = 45569959659n;
//let big2:bigint = 4b545454545454sokidok00000000000000000000000000000n;

//tipo bigint disponivel somente a partir do es2020 ou ESNEXT

// ==> Exemplo1

let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante: ' ,num1);

console.log('Number - Hexadecimal:' ,num2);

console.log('Number - Octal:' ,num3);

console.log('Number - Binário:' ,num4);


// ==> Exemplo2

let big1: bigint = 90909090909090909090090909090n;
let big2: bigint = 0b10000000000000000000000000000000000000011n;
let big3: bigint = 0x200000000000000003n;
let big4: bigint = 0o40000000000000003n;

console.log('Bigint: ' ,big1);

console.log('Bigint - Hexadecimal: ' ,big2);

console.log('Bigint - Octal: ' ,big3);

console.log('Bigint - Binário: ' ,big4);
