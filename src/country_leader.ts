//Verificar con versión Node 10.20.1

import * as readline from 'readline';

let countTest = 0;
let currentTest = 0;
let inputTest: string[] = [];

function main() {
  let rl = readline.createInterface({
        input: process.stdin,
        //  output: process.stdout,
       
  })

  rl.on('line', line => {
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
    return inputTest.shift() || "";
}

if (require.main === module) {
  main();
}

//-------------------- solución -----------------------------------------
// devuelve true cuando finaliza de procesar las líneas para la entrada de un tests
// Esta función se llamara para cada linea que se procesa, incluyendoa en inputTest
// En este ejemplo la primera línea del test indica cuantos nombres (líneas) venían a continuación
function parseInputTest(inputTest: string[]) {
    let numName = parseInt(inputTest[0]);
    return numName == inputTest.length - 1;
}

const MIN_LETTER_CODE = 'A'.charCodeAt(0);
const MAX_LETEER_CODE = 'Z'.charCodeAt(0);

function lengthName(name: string) {
  return name.split('').filter((item, pos, self) => {
    let itemCode = item.charCodeAt(0);
    return (
      itemCode >= MIN_LETTER_CODE &&
      itemCode <= MAX_LETEER_CODE &&
      self.indexOf(item) == pos
    );
  }).length;
}

// currentTest indica el número de test
// Para ir procesando cada línea de entrada ejecutar: read()
// Para escribir a la salida: write()
export function solve(currentTest: number, read: Function, write: Function) {
    let numPeople = parseInt(read());
    let leader = read() ;
    let lenLeader = lengthName(leader);
    for (let j = 1; j < numPeople; j++) {
      let name = read();
      let lenName = lengthName(name);
      if (lenName > lenLeader ||
          (lenName == lenLeader && name.localeCompare(leader) < 0)
      ) {
        leader = name;
        lenLeader = lenName;
      }
    }

  write(`Case #${currentTest}: ${leader}`);
}



