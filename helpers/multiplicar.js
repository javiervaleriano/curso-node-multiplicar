const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log('===================');
//     console.log('   Tabla del', base);
//     console.log('===================');

//     const nombreDeArchivo = `tabla-${base}.txt`;
//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}${i < 10 ? '\n' : ''}`;
//     }

//     console.log(salida);

//     try {
//       fs.writeFileSync(nombreDeArchivo, salida);
//       resolve(nombreDeArchivo);
//     } catch (err) {
//       reject(`El archivo ${nombreDeArchivo} no se pudo crear con éxito`);
//     }
//   });
// };

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    const nombreDeArchivo = `tabla-${base}.txt`;
    let salida = '',
      consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}${i < hasta ? '\n' : ''}`;
      consola += `${colors.cyan(`${base}`)} ${colors.blue('x')} ${i} ${colors.blue('=')} ${colors.red(`${base * i}`)}${i < hasta ? '\n' : ''}`;
    }

    if (listar) {
      console.log('==================='.green);
      console.log('   Tabla del ' + `${base}`.magenta);
      console.log('==================='.green);
      console.log(consola);
    }

    fs.writeFileSync('./salida/' + nombreDeArchivo, salida);
    return nombreDeArchivo;
  } catch (err) {
    throw `El archivo ${nombreDeArchivo} no se pudo crear con éxito`;
  }
};

module.exports = {
  crearArchivo
};