//modulos nativos
const os = require ('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
let cpu_string = JSON.stringify(cpu);


/*
//script templates:  `Informacion del CPU: ${cpu_string}`
fs.appendFile('Mi_archivo.txt',`Informacion del CPU: ${cpu_string}`,function(error){
    if(error){
        console.log('Error al crear el archivo');
    }

});
*/
//---------
//importacion de valores

const mi = require('./importar.js');
console.log('\nUn numero: ',mi.test_numeros);

mi.saludar;

mi.saludar2();

