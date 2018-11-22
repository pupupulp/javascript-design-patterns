/**
 * Chain Class
 */
class CulinaryChallenge {
	setNext(chef) {
		this.nextChef = chef
	}

	cook() {
		if(this.nextChef) {
			console.log('Chef ' + this.name + ' cooking.. \n next up, Chef ' + this.nextChef.name)
			this.nextChef.cook()
		}
	} 
}

/**
 * Model Class for Chef
 */
class Chef extends CulinaryChallenge {
	constructor(name) {
		super()
		this.name = name
	}
}

/**
 * Usage
 */
const chefEagan = new Chef('Eagan')
const chefCharles = new Chef('Charles')
const chefMartin = new Chef('Martin')

chefEagan.setNext(chefCharles)
chefCharles.setNext(chefMartin)

chefEagan.cook()