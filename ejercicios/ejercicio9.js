const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una pakabra ',(palabra) =>{
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length:0;
    console.log(`Numero de vocales: ${numeroVocales}`);
})