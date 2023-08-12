const request = require('request');
const fs = require('fs');
const readline = require('readline');


const url = process.argv[2];
const filePath = process.argv[3];


request(url, (error, response, body) => {
  const content = (`error: ${error} \nstatusCode: ${response && response.statusCode}\nbody: ${body}`);
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
  });
});


