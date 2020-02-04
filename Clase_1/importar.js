console.log('····1 hola desde otro archivo, me estas llamando con el import \n');

let test_numero=222254;
module.exports.numero = test_numero;


/*
//tradicional
function saludo (){
    console.log('\n\n2Hola desde una funcion que vas a importar');
}
module.exports.saludar = saludo();



//funciones flech
module.exports.saludar2 = function(){
    console.log('\n 3Hola 2 desde otra funcion');
}
*/

/*
module.exports = {
    num : test_numero,
    saludando: function(){
        console.log('Hola programador');
    }
}
*/

module.exports = {
    num : test_numero,
    saludando: ()=>{
        console.log('Hola programador');
    },
    sumar: (a,b)=>{

        return a+b;

    }
}