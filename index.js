var fs = require('fs');

fs.writeFile('./text.txt', 'Primera linea',function(err){
  if (err) {
    console.log(err);
  }
  console.log('Archivo creado con exito.');
});


fs.readFile('./text.txt',function(err, data){
  if (err) {
    console.log(err);
  }
  console.log(data);
  console.log(data.toString());
});
