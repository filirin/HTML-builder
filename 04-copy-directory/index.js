const fs = require('fs');
const path = require('path');
const fsPromise = require('fs/promises');
let filesPath = path.resolve("./04-copy-directory/files");
 
fs.stat('./04-copy-directory/files-copy', (err, stat) => {
  if (!err) {
      console.log('Директория есть');
      copyFiles();
  }
  else if (err.code === 'ENOENT') {
    fs.mkdir('./04-copy-directory/files-copy', err => {
      if(err) {
       throw err;
      }   
       console.log('Папка успешно создана');
       copyFiles();

   });
  }
});

async function copyFiles(){
  
  try {
    const copies = await fsPromise.readdir('04-copy-directory/files-copy', {withFileTypes: true});
    console.log(copies);
    for (let copy of copies){
      fs.unlink(`04-copy-directory/files-copy/${copy.name}`, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log('Файл удалён');
        }
      });
    }

    const item = await fsPromise.readdir('04-copy-directory/files', {withFileTypes: true});
    for (const items of item) {
      if (items.isFile()){
        fs.copyFile(`04-copy-directory/files/${items.name}`, `04-copy-directory/files-copy/${items.name}`, (err) => {
          if (err) {
            console.log('Error Found:', err);
          }
                
        });
      }
    }
  } catch(err) {
    console.log((err)); 
  }

}




