//respuesta atraves de la app de GitHub
//se instalo node-fetch
//npm install node-fetch --save
const fetch = require('node-fetch');

fetch('https://api.github.com/users/aaronvelasco93').then((res)=>{
    //    console.log(res);

//retornarlo como JSON
    return res.json();
}).then((json)=>{
    console.log(json);
});