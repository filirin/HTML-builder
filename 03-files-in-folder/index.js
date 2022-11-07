const fs = require('fs');
const path = require('path');
let filePath = path.resolve("./03-files-in-folder/secret-folder");


fs.readdir(filePath, (err, files) => {
  if (err) {
    console.log(err);
  }
  else {
    files.forEach(file => {
      file = path.resolve("./03-files-in-folder/secret-folder/" + file);
      fs.stat(file, (err, stat) => {
        if (!stat.isDirectory()){
          console.log((path.basename(file)).replace(/\..*/,'') + " - " + (path.extname(file)).replace('.','') + " - " + stat.size);
        }
      })
    })
  }
})