var myClass = require('../implements.js')

/**
 * Model Class for Dog
 */
function Dog() {}
Dog.prototype = {
	sit: function() {
		console.log('The dog sat')
	},
	rollOver: function() {
		console.log('The dog rolled over')
	}
}

/**
 * Interface Class
 */
function ICommand() {}
ICommand.prototype = {
	instruct: function() {}
}

/**
 * Command Classes
 */
function SitCommand(dog) { 
	myClass.Implements(this, new ICommand()) 
	this.constructor(dog)
}
SitCommand.prototype = {
	constructor: function(dog) {
		this.dog = dog
	},
	instruct: function() {
		this.dog.sit()
	}
}

function RollOverCommand(dog) { 
	myClass.Implements(this, new ICommand()) 
	this.constructor(dog)
}
RollOverCommand.prototype = {
	constructor: function(dog) {
		this.dog = dog
	},
	instruct: function() {
		this.dog.rollOver()
	}
}

/**
 * Invoker Class
 */
function Trainer() {}
Trainer.prototype = {
	instruct: function(command) {
		command.instruct()
	}
}

/**
 * Usage
 */
try {
	const dog = new Dog()

	const sit = new SitCommand(dog)
	const rollOver = new RollOverCommand(dog)

	const trainer = new Trainer()

	trainer.instruct(sit)
	trainer.instruct(rollOver)
} catch(e) {
	console.log(e)
}