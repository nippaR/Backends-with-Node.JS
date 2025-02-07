const http = require('http'); //import http module
const fs = require('fs'); //import file system module
const path = require('path'); //import path module


//create a server


const server = http.createServer((req, res) => {
    console.log(req.url, req.method); //url is the path and method is the type of request


    // set header content type
res.setHeader('content-Type', 'text/html');

// res.write('<center><h1>Hello World!</h1></center>'); //write response to the client
// res.write('<p>Hello Again!</p>'); //write response to the client
// res.end(); //end response

//send an html file
let wow = './HTML-files/';
switch(req.url){
    case '/':
        wow += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        wow += 'about.html';
        res.statusCode = 200;
        break;
    default:
        wow += '404.html';
        res.statusCode = 404;
        break;
}

fs.readFile(path.join(__dirname, wow), (err, data) => {
    if(err){
        console.log(err);
        res.end();
    } else {
        // res.write(data);
        res.end(data);
    }

}); //read file



});

//listen for requests on port 3000
server.listen(3000, 'localhost', (req,res) =>{ 
    console.log('server is listening for requests on port 3000');
})