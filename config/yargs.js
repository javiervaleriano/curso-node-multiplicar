const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
    },
    'h': {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'La cantidad máxima de multiplicaciones'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw 'La base debe ser un número';
    if (isNaN(argv.h)) throw 'La cantidad máxima de multiplicaciones se indica a través de un número';

    return true;
  })
  .argv;

module.exports = argv;