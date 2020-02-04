const fs = require('fs');

console.log('iniciando');
/*
fs.readFile('data.txt','utf8',(error,data)=>{
    if (error){
        console.log(`Error ${error}`);
    }else{
      console.log(data);
    }
});*/

let data = fs.readFileSync('data.txt','utf8');
console.log(data);
console.log('Finalizado');

/*
fs.rename('data.txt','data_renombrado.txt', (error)=>{
    if (error) throw error;
    console.log('!renomgrado');
});
*/
/*
fs.appendFile('data.txt','\nGracias por revisar este git',(error)=>{

    if(error)console.log(`Error: ${error}`);
});

fs.unlink('data2.txt',(error)=>{
    if (error) throw error;
    console.log('Eliminado')
});
*/

fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

