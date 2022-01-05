const argv = require('./config/yargs');

const {tablaMultiplicar} = require('./helper/multiplicar');

console.clear();

tablaMultiplicar(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo, 'creado'))
    .catch(err => console.log(err));
