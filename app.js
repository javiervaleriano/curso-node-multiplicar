const { crearArchivo } = require('./helpers/multiplicar');
const { b, l, h } = require('./config/yargs');

require('colors');

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('='); -- FORMA NO RECOMENDADA


console.clear();

crearArchivo(b, l, h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((err) => console.log(err));