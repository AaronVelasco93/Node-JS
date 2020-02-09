const express = require('express');
const app = express();

//variables con una coleccion de personas
let personas = [
    {
        id:1,
        nombre : "Aaron"
    },
    {
        id:2,
        nombre: "Ana"
        
    },
    {
        id: 3,
        nombre: "Jon"
    }
]

//operacion de tipos get
app.get('/', (req, res)=>{


});

app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });