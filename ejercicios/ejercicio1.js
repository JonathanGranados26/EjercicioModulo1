const readline = require("readline");

const url = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

url.question('ingrese su nombre: ',(nombre)=> {
    url.question('ingrese su apellido: ',(apellido)=>{
        console.log(`Hola mi nombre es ${nombre} ${apellido}`);
    })
})