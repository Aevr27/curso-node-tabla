const fs = require('fs');
const path = require('path');

const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {
    return new Promise((resolve, reject) => {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log('=================');
            console.log('   Tabla del:', base );
            console.log('=================');
            console.log(salida);
        }

        const outputDir = path.join(__dirname, '../salida');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const fileName = path.join(outputDir, `tabla-${ base }.txt`);

        fs.writeFile(fileName, salida, (err) => {
            if (err) {
                reject(err);
            } else {
                fs.readFile(fileName, 'utf8', (readErr, data) => {
                    if (readErr) {
                        reject(readErr);
                    } else {
                        resolve(`Archivo creado: ${fileName}\n\nContenido:\n${data}`);
                    }
                });
            }
        });
    });
};

module.exports = {
    crearArchivo
};
