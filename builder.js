/**
 * Model Class
 */
class PowerpuffGirls {
	constructor(builder) {
		this.sugar = builder.sugar
		this.spice = builder.spice
		this.everythingNice = builder.everythingNice
		this.chemicalX = builder.chemicalX
	}
}

/**
 * Builder Class
 */
class PowerpuffGirlsBuilder {
	constructor() { }

	addSugar(add = true) {
		this.sugar = add
		return this
	}

	addSpice(add = true) {
		this.spice = add
		return this
	}

	addEverythingNice(add = true) {
		this.everythingNice = add
		return this
	}

	addChemicalX(add = true) {
		this.chemicalX = add
		return this
	}

	build() {
		return new PowerpuffGirls(this)
	}
}

/**
 * Usage
 * @type {PowerpuffGirlsBuilder}
 */
const professorUtonium = new PowerpuffGirlsBuilder()
const powerpuffGirls = professorUtonium
						.addSugar()
						.addSpice()
						.addEverythingNice()
						.addChemicalX()
						.build()