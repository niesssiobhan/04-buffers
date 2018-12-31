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

let startArticle = new Buffer('<article>');
let endArticle = new Buffer('</article>');

let startHeader = new Buffer('<h2>');
let endHeader = new Buffer('</h2>');
let startHeaderThree = new Buffer('<h3>');
let endHeaderThree = new Buffer('</h3>');
let ulOpen = new Buffer('<ul>');
let ulClose = new Buffer('</ul>');
let liOpen = new Buffer('<li>');
let liClose = new Buffer('</li>');

fs.readFile('./files/pair-programming.txt', (err, data) => {
  if(err) { throw err; }
  let articleConcat = [startArticle, data, endArticle];

  fs.writeFile('./files/pair-programming.html', articleConcat, err => {
    if(err) { throw err; }
    console.log('here is the article tags');
  });
});