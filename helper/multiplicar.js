const fs = require('fs');
const colors = require('colors');

const tablaMultiplicar = async (base, listar, limite) => {
  try {
    let consola = "====================\n".green +
                 "   Tabla del: " .green + colors.blue(base)+ "\n" +
                 "====================\n".green;

    let salida = "====================\n" +
                 "   Tabla del: " + base + "\n" +
                 "====================\n";

    for (let i = 1; i <= limite; i++) {
      consola += `${colors.yellow(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.blue((base * i))}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar)
      console.log(consola);
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida.trim());

    return `tabla-${base}.txt`.rainbow
  } catch (error) {
    throw error;
  }
}

module.exports = {
  tablaMultiplicar
}
