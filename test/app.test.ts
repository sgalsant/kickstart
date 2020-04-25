// https://www.chaijs.com/api/assert/


import * as app from '../dist/app.js';

const assert = chai.assert;

let output: string[] = [];
function write(line: string) {
  output.push(line);
}

let input: string[] = [];
let currentLine = 0;
function read() {
  return input[currentLine++];
}

function loadInput(text: string) {
  input = text.trim().split('\n').map((string) => {return string.trim();});
}

describe('tests en test/app.test.ts', () => {
  it('test default', () => {
    loadInput(`
          2
          3
          ADAM
          BOB
          JOHNSON
          2
          A AB C
          DEF
    `);

     app.main(read, write);

     assert.equal(output.length, 2);
     assert.equal(output[0], "Case #1: JOHNSON");
     assert.equal(output[1], "Case #2: A AB C");
  });
});
