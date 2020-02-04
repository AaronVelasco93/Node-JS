//archivo JSON

const _ = require('lodash');
const argv = require('yargs');

let comando = process.argv;
console.log(comando);


let x = {"nombre":"aaron"}
let y = {"apodo": "programador"}
let z =[
    {nombre: "Ana", apellido: "aguilar", edad: 25},
    {nombre: "Aaron", apellido: "velasco", edad: 26}
]

/*
// juntaron dos JSON
let resultado = _.assign(x,y);
console.log(resultado);
*/

//iteracion
//_.times(3, ()=> console.log('hola'));


//buscar objetos
let resultado = _.find(z,{nombre: "Ana", apellido: "aguilar"});
console.log(resultado);
