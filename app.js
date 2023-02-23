//let Emitter = require('./emitter');
let Emitter = require('events');
let config = require('./config');
let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
	console.log("Somewhere, someone said hello!");
});

emtr.on(config.events.GREET, () => {
	console.log("A greeting ocurred!");
});

//console.log("Hello!");
emtr.emit('greeting');

emtr.on(config.events.JUMP, () => {
	console.log("someone jumped!");
});

console.log(emtr);
emtr.emit('jumping');