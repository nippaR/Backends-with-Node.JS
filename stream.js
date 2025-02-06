const fs = require('fs');
const path = require('path');

// Reading a Big File

const rs = fs.createReadStream(path.join(__dirname, 'Files', 'Stater'), 'utf8');

const ws = fs.createWriteStream(path.join(__dirname, 'Files', 'kulud Arliya Mal'), 'utf8');


rs.on('data', (chunk) => {
    console.log(chunk);
    rs.read(chunk);
})



