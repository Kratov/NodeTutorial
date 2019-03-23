// const http = require('http');
//
// const colors = require('colors');
// const serverCallback = function(req, res){
//   res.writeHead(200,{'content-type' : 'text/html'});
//   res.write('<h1>Hola mundo</h1>');
//   res.end();
// }
//
// const hServer = http.createServer(serverCallback);
//
// hServer.listen(3000, function(){
//   console.log('Servidor en puerto 3000'.yellow);
// });

const express = require('express');
const colors = require('colors');

const hServer = express();

hServer.get('/',(req, res) => {
  res.send('<h1>Hola mundo express</h1>');
  res.end();
});

hServer.listen(3000, () => {
  console.log('server port 3000'.red);
});
