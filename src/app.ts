// https://codingcompetitions.withgoogle.com/kickstart/round/0000000000201ca2
'use strict';


let inputLines: string[] = [];

function write(line: string) {
  console.log(line);
}

let currentLine = 0;
function read(): string {
  return inputLines[currentLine++];
}

function readInput() {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString: string = '';
  process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
  });

  process.stdin.on('end', () => {
    inputLines = inputString
      .trim()
      .split('\n')
      .map((string) => {
        return string.trim();
      });

    main(read, write);
  });
}

// comenta la siguiente línea si estas ejecutando los tests
readInput();

//-------------------- solución -----------------------------------------

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

// recuerda eliminar "export" cuando subas el código a Google 
// en el fichero compilado dist/app.js
//   read() Para leer la entrada línea a línea
//   write() Para escribir la salida, también línea a línea
export function main(read: Function, write: Function) {
  let numTests = parseInt(read());
  for (let i = 0; i < numTests; i++) {
    let numPeople = parseInt(read());
    let leader = read();
    let lenLeader = lengthName(leader);
    for (let j = 1; j < numPeople; j++) {
      let name = read();
      let lenName = lengthName(name);
      if (
        lenName > lenLeader ||
        (lenName == lenLeader && name.localeCompare(leader) < 0)
      ) {
        leader = name;
        lenLeader = lenName;
      }
    }
    
    write(`Case #${i + 1}: ${leader}`);
  }
}
