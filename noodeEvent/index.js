const logEvent = require('./logEvent');

const EventEmitter = require('events');

class myEmitter extends EventEmitter {};

//intialize the object

const myEmitterInstance = new myEmitter();


//add listener to the event

myEmitterInstance.on('log', (msg) => logEvent(msg));  //gg is the event name

setTimeout(() => {
    myEmitterInstance.emit('log', 'This is the message');
}, 2000); //every 2 seconds

//