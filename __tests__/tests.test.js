'use strict';

const loop = require('../index.js');

describe('the loop.js file has been created', () => {
  it('this creates a buffer', () => {
    let test = Buffer.concat(loop.arr);
    expect(test).toEqual();
  });
});