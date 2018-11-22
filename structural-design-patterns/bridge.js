var myClass = require('../implements.js')

/**
 * Interface Class for Dish
 */
function IDish() {}
IDish.prototype = {
	constructor: function() {},
	serve : function() {}
}

/**
 * Dish Classes
 */
function ChickenInasal(flavor) { 
	myClass.Implements(this, new IDish()) 
	this.constructor(flavor)
}
ChickenInasal.prototype = {
	constructor: function(flavor) {
		this.flavor = flavor
	},
	serve: function() {
		return "Chicken Inasal in " + this.flavor.getFlavor() + " flavor"
	}
}

function Sisig(flavor) { 
	myClass.Implements(this, new IDish()) 
	this.constructor(flavor)
}
Sisig.prototype = {
	constructor: function(flavor) {
		this.flavor = flavor
	},
	serve: function() {
		return "Sisig in " + this.flavor.getFlavor() + " flavor"
	}
}

/**
 * Interface Class for Flavor
 */
function IFlavor() {}
IFlavor.prototype.getFlavor = function() {}

/**
 * Flavor Classes
 */
function OriginalFlavor() { myClass.Implements(this, new IFlavor()) }
OriginalFlavor.prototype = {
	getFlavor: function() {
		return "original"
	}
}

function SpicyFlavor() { myClass.Implements(this, new IFlavor()) }
SpicyFlavor.prototype = {
	getFlavor: function() {
		return "spicy"
	}
}

/**
 * Usage
 */
try {
	const originalFlavor = new OriginalFlavor()
	const spicyFlavor = new SpicyFlavor()

	const chickenInasal = new ChickenInasal(originalFlavor)
	const sisig = new Sisig(spicyFlavor)

	console.log(chickenInasal.serve())
	console.log(sisig.serve())
} catch(e) {
	console.log(e)
}
