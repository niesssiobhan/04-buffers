'use strict';

let array = ['Jared', 'Teagan', 'Siobhan'];
array.forEach( name => {
  console.log(name);
});

const fs = require('fs');

let filePath = './files/pair-programming.html';

// let bufferOne = new Buffer('\'use strict\';\n');
// let bufferTwo = new Buffer('let array = [\'Jared\', \'Teagan\', \'Siobhan\'];\n');
// let bufferThree = new Buffer('array.forEach( name => {\n');
// let bufferFour = new Buffer(' console.log(name)\n');
// let bufferFive = new Buffer('});');

function createBuffer(str) {
  let buffer = new Buffer.from('');
  for(let i = 0; i < str.length; i++){
    buffer += new Buffer.from(str[i]);
  }
  return buffer;
}

fs.readFile(path, function callback(err, data) {
  if(err) {throw (err);}
  console.log('reading file');
  
  fs.writeFile(filePath, data, (err) => {
    if(err) {throw (err);}
    console.log('the file has been successfully written');
  });
});

// let array = [bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive];

// let finalBuffer = Buffer.concat(array);
let buffer = createBuffer(array);
createfile('./files/loop.js', buffer);