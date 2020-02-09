const express = require('express');
const app = express();

//operaciones soportadas por http 
//para probar este tipo de metodos http usar postman

let logger= (req,res,next)=>{
    console.log('peticion de tipos:', req.method);
    next();
}

let isLogin = () => true;

let showIP = (req,res,next)=>{
    console.log('IP. 157.0.0.1');
    next();
}

app.use((req, res, next)=>{
    if(isLogin()){
        next();
    }else{
        res.send('No estas logeado');
    }

},logger, showIP);

app.use(logger);


app.get('/',  (req, res)=> {
    res.send(`hola mundo ${req.method}`);
  });

app.post('/',  (req, res)=> {
    res.send(`hola mundo ${req.method}`);
  });

  
app.put('/',  (req, res)=> {
    res.send(`hola mundo ${req.method}`);
  });

app.delete('/',  (req, res)=> {
    res.send(`hola mundo ${req.method}`);
  });

  
  app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });