const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Start!")

rl.on('line', (input) => {
  if (input == "exit") {
    rl.close();
    return;
  }
  let stream = fs.createWriteStream('./02-write-file/same.txt', {flags:'a'});
  stream.write(input + " ");
  stream.end();
});

process.on('exit', function (code) {
  return console.log("The end!");
});

