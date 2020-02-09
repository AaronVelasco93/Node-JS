const request = require('request');
// npm i request --save

const argv = require('yargs').argv;

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`;

request({
    url: url,
    json:true
}, (error, responce, body)=>{
    console.log(body);
});