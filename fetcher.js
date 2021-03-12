
const request = require('request');
const fs = require('fs');

const inputs = process.argv;
let inputsArr = inputs.slice(2);
URL = inputsArr[0];
filePath = inputsArr[1];

  request(URL, (error, response, body) => {
    if (error) {
      return console.log('error');
    } 
    fs.writeFile(filePath, body, err => {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    })
  })


 