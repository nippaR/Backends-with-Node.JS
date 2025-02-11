const express = require('express');
const mongoose = require('mongoose');

const app = express(); //create an express app

//connect to the database

const dbURI = '';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


//listen for requests on port 3000
app.listen(3000, () =>{
    console.log('server is listening for requests on port 3000');
});


app.get('/', (req, res) => {
    res.sendFile('./HTML-files/index.html', {root: __dirname});
    console.log('request for ' + req.url);
});

app.get('/about', (req,res) => {
    res.sendFile('./HTML-files/about.html', {root: __dirname});
    console.log('request for ' + req.url);
});


app.use((req, res) => {
    res.sendFile('./HTML-files/404.html', {root: __dirname});
    console.log('request for ' + req.url);
});