const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ',(cadena)=>{
    const cadenaInvetida = cadena.split(``).reverse().join(``);
    console.log(`Cadena Invertida: ${cadenaInvertida}`);
})