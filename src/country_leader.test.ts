// https://www.chaijs.com/api/assert/

import 'mocha';
import * as chai from 'chai';
import { solve } from './country_leader';

let output: string[] = [];
function write(line: string) {
  output.push(line);
}

let input: string[] = [];
function read(): string {
  return input.shift() || "";
}

function loadInput(text: string) {
  input = text.trim().split('\n').map((string) => {return string.trim();});
}

describe('tests country leader', () => {
  beforeEach(function() {
    input = [];
    output = [];
  });

  it('test 1', () => {
    loadInput(`
          3
          ADAM
          BOB
          JOHNSON
    `);

     solve(1, read, write);

     chai.assert.equal(output.length, 1); // comprueba que se ha generado dos líneas a la salida
     chai.assert.equal(output[0], "Case #1: JOHNSON");  // comprueba el texto de la primera línea
  });

  it('test 2', () => {
    loadInput(`
          2
          A AB C
          DEF
    `);

    solve(2, read, write);

    chai.assert.equal(output.length, 1); // comprueba que se ha generado dos líneas a la salida
    chai.assert.equal(output[0], "Case #2: A AB C");   // comprueba el texto de la segunda línea
  });
});
