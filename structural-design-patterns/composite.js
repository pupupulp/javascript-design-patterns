var myClass = require('../implements.js')

/**
 * Interface Class for Doctor
 */
function IDoctor() {}
IDoctor.prototype = {
	constructor: function(name, rate) {},
	getFlavor: function() {},
	setRate: function(rate) {},
	getRate: function() {},
	getSpecialty: function() {}
}

/**
 * Doctor Classes
 */
function Anesthesiologists(name, rate) {
	myClass.Implements(this, new IDoctor()) 
	this.specialty = `
		These doctors give you drugs to numb your pain or to put you under 
		during surgery, childbirth, or other procedures. 
		They monitor your vital signs while you’re under anesthesia.
	`

	this.constructor(name, rate)
}
Anesthesiologists.prototype = {
	constructor: function(name, rate) {
		this.name = name
		this.rate = rate
	},
	getFlavor: function() {
		return this.flavor
	},
	setRate: function(rate) {
		this.rate = rate
	},
	getRate: function() {
		return this.rate
	},
	getSpecialty: function() {
		return this.specialty
	},
	giveAnesthesia: function() {
		console.log("Anesthesia given")
	}
}

function Cardiologists(name, rate) {
	myClass.Implements(this, new IDoctor()) 
	this.specialty = `
		They’re experts on the heart and blood vessels. 
		You might see them for heart failure, a heart attack, 
		high blood pressure, or an irregular heartbeat.
	`

	this.constructor(name, rate)
}
Cardiologists.prototype = {
	constructor: function(name, rate) {
		this.name = name
		this.rate = rate
	},
	getFlavor: function() {
		return this.flavor
	},
	setRate: function(rate) {
		this.rate = rate
	},
	getRate: function() {
		return this.rate
	},
	getSpecialty: function() {
		return this.specialty
	},
	checkHeart: function() {
		console.log("Heart checked")
	}
}

/**
 * Organization Class
 */
function Hospital() { this.constructor() }
Hospital.prototype = {
	constructor: function() {
		this.doctors = []
	},
	addDoctor: function(doctor) {
		this.doctors.push(doctor)
	},
	getNetRates: function() {
		let netRate = 0

		this.doctors.forEach(doctor => {
			netRate += doctor.getRate()
		})

		return netRate
	}
}

/**
 * Usage
 */
try {
	const anesthesiologists = new Anesthesiologists("John Doe", 50000)
	const cardiologists = new Cardiologists("Jane Doe", 150000)

	const hospital = new Hospital()
	hospital.addDoctor(anesthesiologists)
	hospital.addDoctor(cardiologists)

	console.log("Net Rates: ", hospital.getNetRates())
} catch(e) {
	console.log(e)
}
