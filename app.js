const http = require('http');

const express = require('express');


const app = express();

app.use((req,res,next)=>{
    console.log("hell this is middleware function 1");
    // next() transfer/pass the request to the next middleware function
    next();
});

app.use((req,res,next)=>{
    console.log("hell this is middleware function 2");
    // next() transfer/pass the request to the next middleware function
    next();
});

app.use((req,res,next)=>{
    console.log("hell this is middleware function 3");
    // next() transfer/pass the request to the next middleware function
    next();
});

const server = http.createServer(app);

server.listen(3000);




