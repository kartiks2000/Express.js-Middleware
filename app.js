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
    
    // We NOT always have to call next() we could also send a response instead and in express we dont need to use setHeader() or write() to send response using -

    res.send('<h1>Hello this is my response!!</h1>');

    // we can send anything inside it like html, text, file.
});

const server = http.createServer(app);

server.listen(3000);




