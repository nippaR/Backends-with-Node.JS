const fsPromises = require('fs').promises;
const path = require('path');

const All = async () => {
    try {
        
        // Reading a file
        const data = await fsPromises.readFile(path.join(__dirname, 'Files', 'song') ,'utf8');
        console.log(data);  
        await fsPromises.rename(path.join(__dirname, 'Files', 'song'), path.join(__dirname, 'Files', 'kulud Arliya Mal'));
    }
    catch (err) {
        console.error(err);
    }
}

All(); // Calling the function






/*
// Reading a file

fs.readFile(path.join(__dirname,'Files','Stater'), 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
})

//  Writing a file


//callback hell removed by using promises
fs.writeFile(path.join(__dirname, 'Files', 'song'), ` රතු කම්මුල් හිනෑහී කියනා \n නුඹ ලංවී මට ඉඟි කරනා \n හිත අස්සෙන් නුඹගේ මුව සිපගන්නා \n තනියෙන් හිත සොයනා රෑ මා \n සඳ අස්සෙන් තරු ඉකිබින්දා \n හිමි වෙන්නම් නුඹගේ හද සරසාලා`, (err) =>{
    if (err) throw err;
    console.log('File has been written');

    //appending a file
    fs.appendFile(path.join(__dirname,'Files','song'), `\n\nWritten By Dhayn Hewage`, (err) =>{
        if (err) throw err;
        console.log('File has been appended');
    })

})

// Deleting a file
fs.unlink(path.join(__dirname, 'Files', 'wow') , (err) => {
    if (err) throw err;
    console.log('File has been deleted');
}
)

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
    process.exit(1);
});
*/