import * as fs from 'node:fs'; // requires package.JSON. ES6 szintktika. npm (node pack manager) init

//const fs = require('fs') // common JS szintaktika, nem kell JSON

/*
try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
}*/

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log(data);
  });