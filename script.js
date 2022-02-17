/**** EVAL ****/

// const fs = require("fs");

// fs.readFile('conf.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     let json = JSON.parse(data);
//     executeConf(json);
// })

// function executeConf(jsonArray) {
//     for (const element of jsonArray) {
//         let array = element.input;
//         eval(element.code);
//     }
// }

//-------------------------------------------------//

// let value = 5;

// function myLog(variableToLog, someCode) {
//     eval(someCode);
//     console.log(variableToLog);
// }

// myLog(value, "variableToLog = '6pippo'; console.log('Ti ho fregato');");

//-------------------------------------------------//

/**** MODULES ****/

/**** Default di Node js ****/
// const MyMath = require("./myMath.js"); // In questo modo creo un namespace.

// console.log(MyMath.sum(3, 4));

// console.log(MyMath.pow(3, 2));

// console.log(Math.pow(3, 2));



// const helper = require("./caseHelper.js");

// console.log(helper.splitCamelCase("laCasaRosa"));

/**** Modo più vecchio (prima di Node js) ****/
// function helper2() {
//     function startingUpperCase(string) {
//         return string[0].toUpperCase() + string.substring(1);
//     }
//     function splitCamelCase(string) {
//         let output = "";
//         for (const char of string) {
//             if (char === char.toUpperCase()) {
//                 output += (" " + char.toLowerCase());
//             } else {
//                 output += char;
//             }
//         }
//         return output;
//     }
//     return {startingUpperCase, splitCamelCase};
// }

// const h2 = helper2();

// console.log(h2.splitCamelCase("laCasaRosa"));

//-------------------------------------------------//

/**** Modulo esterno ****/

const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
    });