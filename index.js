'use strict';

const fs = require('fs');

let bufferOne = new Buffer('\'use strict\';\n');
let bufferTwo = new Buffer('let array = [\'Jared\', \'Teagan\', \'Siobhan\'];\n');
let bufferThree = new Buffer('array.forEach( name => {\n');
let bufferFour = new Buffer(' console.log(name)\n');
let bufferFive = new Buffer('});');

let array = [bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive];

let finalBuffer = Buffer.concat(array);

fs.writeFile('./files/loop.js', finalBuffer, err => {
  if(err) { throw err; }
  console.log('stuff');
});

  fs.writeFile('./files/loop.js', finalBuffer, err => {
    if(err) { throw err; }
    console.log('the file has been made');
  });

  module.exports = (array);