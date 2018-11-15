/**
 * Model Class
 */
class MilkTea {
	constructor(flavor, sinkers) {
		this.flavor = flavor
		this.sinkers = sinkers
	}

	getFlavor() {
		return this.flavor
	}

	getSinkers() {
		return this.sinkers
	}
}

/**
 * Factory
 * @type {Object}
 */
const Serenitea = {
	orderMilkTea: (flavor, sinkers) => new MilkTea(flavor, sinkers)
}

const milkTea = Serenitea.orderMilkTea("okinawa", "pearls")

console.log("Flavor: ", milkTea.getFlavor())
console.log("Sinkers: ", milkTea.getSinkers())
