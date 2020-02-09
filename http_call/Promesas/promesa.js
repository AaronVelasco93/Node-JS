let calcular = (numero1, numero2)=>{

    return new Promise ((resolve, reajet)=>{
      setTimeout(() => {
          
        let suma = numero1+numero2;

        if(suma>5){
            //respuesta
            resolve(numero1+numero2);
        }else{
            reajet('Error de los datos');
        }


      }, 2000);


    });
}

//exportamos el modulo para poder utilizarlo
module.exports={
    calcular
}