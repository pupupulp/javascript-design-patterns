/**
 * Builder Class
 */
class Chef {
	cook() {
		this.prepareIngredients()
		this.sliceVegetables()
		this.moldPatties()
		this.preHeatBread()
		this.cookPatties()
		this.prepareBurgers()
	}
}

/**
 * Implementation of Template
 */
class Spongebob extends Chef {
	prepareIngredients() {
		console.log('Preparing ingredients...')
	}

	sliceVegetables() {
		console.log('Slicing vegetables...')
	}

	moldPatties() {
		console.log('Molding patties...')
	}

	preHeatBread() {
		console.log('Pre-heating bread...')
	}

	cookPatties() {
		console.log('Cooking patties...')
	}

	prepareBurgers() {
		console.log('Preparing burgers...')
	}
}

class Plankton extends Chef {
	prepareIngredients() {
		console.log('Preparing ingredients...')
	}

	sliceVegetables() {
		console.log('Slicing vegetables...')
	}

	moldPatties() {
		console.log('Skipping molding of patties...')
	}

	preHeatBread() {
		console.log('Not pre-heating bread...')
	}

	cookPatties() {
		console.log('Cooking patties...')
	}

	prepareBurgers() {
		console.log('Preparing burgers...')
	}
}

/**
 * Usage
 */
const spongebob = new Spongebob()
console.log('Spongbob: ')
spongebob.cook()
console.log('\n')

const plankton = new Plankton()
console.log('Plankton: ')
plankton.cook()
console.log('\n')