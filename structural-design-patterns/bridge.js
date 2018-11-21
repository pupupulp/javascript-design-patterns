/**
 * Dish Classes
 */
class ChickenInasal {
	constructor(flavor) {
		this.flavor = flavor
	}

	serve() {
		return "Chicken Inasal in " + this.flavor.getFlavor() + " flavor"
	}
}

class Sisig {
	constructor(flavor) {
		this.flavor = flavor
	}

	serve() {
		return "Sisig in " + this.flavor.getFlavor() + " flavor"
	}
}

/**
 * Flavor Classes
 */
class OriginalFlavor {
	getFlavor() {
		return "original"
	}
}

class SpicyFlavor {
	getFlavor() {
		return "spicy"
	}
}

/**
 * Usage
 */
const originalFlavor = new OriginalFlavor()
const spicyFlavor = new SpicyFlavor()

const chickenInasal = new ChickenInasal(originalFlavor)
const sisig = new Sisig(spicyFlavor)

console.log(chickenInasal.serve())
console.log(sisig.serve())