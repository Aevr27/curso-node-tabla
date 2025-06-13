
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log( argv );



crearArchivo(argv.b, argv.l, argv.h)
  .then(msg => {
    if (argv.l) console.log(msg);
    else console.log(`Archivo creado: tabla-${argv.b}.txt`);
  })
     .catch( err => console.log(err) );