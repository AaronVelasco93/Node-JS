 //importacion
 let prom= require('./promesa');


 //creacion de la promesa
 prom.calcular(2,3).then((resultado)=>{
    console.log(resultado);
 }, (error)=>{
     console.log(error);
 });


 /*
 let promesa = new Promise((resolve, reject)=>{
    //resolve('Exito al procesar los datos');
    reject('error');
});

promesa.then((resuluado)=>{
    console.log(resuluado);
},(error)=>{

    console.log(error);
});
*/