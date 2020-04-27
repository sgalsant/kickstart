//Verificar con versión Node 10.20.1

import * as readline from 'readline';

let countTest = 0;
let currentTest = 0;
let inputTest: string[] = [];

function main() {
  let rl = readline.createInterface({
    input: process.stdin
    //  output: process.stdout,
  });

  rl.on('line', (line) => {
    if (countTest == 0) {
      countTest = parseInt(line);
    } else {
      inputTest.push(line);
      if (parseInputTest(inputTest)) {
        currentTest++;

        solve(currentTest, readConsole, writeConsole);

        if (currentTest == countTest) {
          rl.close();
          process.exit(0);
        }

        inputTest = [];
      }
    }
  });
}

function writeConsole(line: string) {
  console.log(line);
}

function readConsole(): string {
  return inputTest.shift() || '';
}

if (require.main === module) {
  main();
}


//-------------------- solución -----------------------------------------
// Ejemplo leer para cada caso de test el mismo numero de líneas que el indicado a principio
function parseInputTest(inputTest: string[]) {
  let numName = parseInt(inputTest[0]);
  return numName == inputTest.length - 1;
}


// currentTest indica el número de test
// Para ir procesando cada línea de entrada ejecutar: read()
// Para escribir a la salida: write()
export function solve(currentTest: number, read: Function, write: Function) {
  let result: string[] = [];
  while (true) {
    let line: string = read();
    if (line == "") { // se ha alcanzado la última línea
      break;
    }
    result.push(line);
  }

  // en este ejemplo devuelve toda la entrada recibida para el test, uniendo las líneas con @
  write(`Case #${currentTest}: ${result.join("@")}`);
}
