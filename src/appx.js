// https://codingcompetitions.withgoogle.com/kickstart/round/0000000000201ca2
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

function readInput() {
  process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
  });

  process.stdin.on('end', (_) => {
    inputString = inputString
      .trim()
      .split('\n')
      .map((string) => {
        return string.trim();
      });

    main(read, write);
  });
}

function write(line) {
  console.log(line);
}

let currentLine = 0;
function read() {
  return inputString[currentLine++];
}

readInput();

//-------------------------------------------------------------

const MIN_LETTER_CODE = 'A'.charCodeAt();
const MAX_LETEER_CODE = 'Z'.charCodeAt();

function lengthName(name) {
  return name.split('').filter((item, pos, self) => {
    let itemCode = item.charCodeAt();
    return (
      itemCode >= MIN_LETTER_CODE &&
      itemCode <= MAX_LETEER_CODE &&
      self.indexOf(item) == pos
    );
  }).length;
}

export function main(read, write) {
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
