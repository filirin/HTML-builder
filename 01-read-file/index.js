const fs = require('fs');
const path = require('path');

let filePath = path.resolve("./01-read-file/text.txt");

let stream = new fs.createReadStream(filePath, 'utf-8');
stream.on('data', (chunk) => {
  console.log(chunk);
})
