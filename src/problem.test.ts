import 'mocha';
import * as chai from 'chai';
import { solve } from './problem';

let output: string[] = [];
function write(line: string) {
  output.push(line);
}

let input: string[] = [];
function read(): string {
  return input.shift() || '';
}

function loadInput(text: string) {
  input = text
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });
}

describe('tests problem', () => {
  beforeEach(function () {
    input = [];
    output = [];
  });

  it('test 1', () => {
    loadInput(`
          2
          a
          b
    `);

    solve(1, read, write);

    chai.assert.equal(output.length, 1); // comprueba que se ha generado dos líneas a la salida
    chai.assert.equal(output[0], 'Case #1: 2@a@b'); // comprueba el texto de la primera línea
  });
});
