var myClass = require('../implements.js')

/**
 * Interface Class for Coffee
 */
function ICoffee() {}
ICoffee.prototype = {
	getCost: function(){},
	getDescription: function(){}
}

/**
 * Base Coffee Class
 */
function MidnightMocha() { myClass.Implements(this, new ICoffee()) }
MidnightMocha.prototype = {
	getCost: function() {
		return 0
	},
	getDescription: function() {
		return `
			The Midnight Mocha Frappuccino features dark cocoa powder infused 
			coffee and while it is a chocolaty dream, you can also customize 
			your drink with a pump of mint syrup to recreate the popular 
			Midnight Mint Mocha Frappuccino.
		`
	}
}

/**
 * Decorator Classes
 */
function ShortMidnightMocha(midnightMocha) { 
	myClass.Implements(this, new ICoffee()) 
	this.constructor(midnightMocha)
}
ShortMidnightMocha.prototype = {
	constructor: function(midnightMocha) {
		this.midnightMocha = midnightMocha
	},
	getCost: function() {
		return 'SHORT: ' + (this.midnightMocha.getCost() + 120)
	},
	getDescription: function() {
		return this.midnightMocha.getDescription()
	}
}

function TallMidnightMocha(midnightMocha) { 
	myClass.Implements(this, new ICoffee()) 
	this.constructor(midnightMocha)
}
TallMidnightMocha.prototype = {
	constructor: function(midnightMocha) {
		this.midnightMocha = midnightMocha
	},
	getCost: function() {
		return 'TALL: ' + (this.midnightMocha.getCost() + 150)
	},
	getDescription: function() {
		return this.midnightMocha.getDescription()
	}
}

function GrandeMidnightMocha(midnightMocha) { 
	myClass.Implements(this, new ICoffee()) 
	this.constructor(midnightMocha)
}
GrandeMidnightMocha.prototype = {
	constructor: function(midnightMocha) {
		this.midnightMocha = midnightMocha
	},
	getCost: function() {
		return 'GRANDE: ' + (this.midnightMocha.getCost() + 175)
	},
	getDescription: function() {
		return this.midnightMocha.getDescription()
	}
}

/**
 * Usage
 */
try {
	const midnightMocha = new MidnightMocha()
	console.log(midnightMocha.getDescription())

	const shortMidnightMocha = new ShortMidnightMocha(midnightMocha)
	console.log(shortMidnightMocha.getCost())

	const tallMidnightMocha = new TallMidnightMocha(midnightMocha)
	console.log(tallMidnightMocha.getCost())

	const grandeMidnightMocha = new GrandeMidnightMocha(midnightMocha)
	console.log(grandeMidnightMocha.getCost())
} catch(e) {
	console.log(e)
}

