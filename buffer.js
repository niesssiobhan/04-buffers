'use strict';

const fs = require('fs');
const reader = require('readline');

let openArticle = new Buffer('<article>');
let closedArticle = new Buffer('</article>');

class Converter {
  
  constructor(){
    this.buffer = Buffer.from('');
    this.tags = {};
    this.openArticle = Buffer.from('<article>');
    this.closedArticle = Buffer.from('</article>');
  }

  newTag(tag, buffer){
    if(! this.tags[tag]) {
      this.tags[tag] = {
        open: Buffer.from(`<${tag}>`),
        close: Buffer.from(`</${tag}>`),
      };
    }
    this.buffer = Buffer.concat([this.buffer, this.tags[tag].open, buffer, this.tags[tag].close]);
  }

  convert(file){

    let readLine = reader.createInterface({
      input: fs.createReadStream(file),
    });

    readLine.on('line', function(line) {
      if(line.match(/^[0-9]\./)) {
        this.newTag('h3', Buffer.from(line));
      }
      else if(line.match(/\./)){
        line.split('.').forEach(eachSentence => {
          eachSentence && this.newTag('li', Buffer.from(eachSentence));
        });
      }
      else if(line){
        this.newTag('h2', Buffer.from(line));
      }
  
    }.bind(this));
  
    readLine.on('close', () => {

      fs.writeFile('./files/pair-programming.html', Buffer.concat([openArticle, this.buffer, closedArticle]), (err, data) => {
        console.log('there has been a file created');
      });
    });
  }
}

let html = new Converter();
html.convert('./files/pair-programming.txt');