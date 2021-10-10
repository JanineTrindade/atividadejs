// Operações aritiméticas

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
res.statusCode = 200;
res.setHeader('Content.Type','text/plain');
res.end('hello world');

});

server.listen(port,hostname,() => {
    console.log("servidor rodando");
})

var valor1=10;
var valor2= 5;
var valor3= 15;
var total;

total = (valor1 + valor3) / valor2 * valor1;
console.log(total);


