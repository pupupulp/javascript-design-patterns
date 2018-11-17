/**
 * Drinks' Model Classes
 */
class Beer {
	getDescription() { console.log('Cheers') }
}

class Coffee {
	getDescription() { console.log('Relax') }
}

/**
 * Experts Model Classes
 */
class Brewer {
	getDescription() { console.log('For Beer') }
}

class Barista {
	getDescription() { console.log('For Coffee') }
}

/**
 * Implementation of Model Classes
 */
class BeerFactory {
	makeBeer() {
		return new Beer()
	}

	makeExpert() {
		return new Brewer()
	}
}

class CoffeeFactory {
	makeCoffee() {
		return new Coffee()
	}

	makeExpert() {
		return new Barista()
	}
}

/**
 * Usage
 * @type {BeerFactory}
 */
const beerFactory = new BeerFactory()
beer = beerFactory.makeBeer()
expert = beerFactory.makeExpert()

beer.getDescription()
expert.getDescription()

/**
 * Usage
 * @type {CoffeeFactory}
 */
const coffeeFactory = new CoffeeFactory()
coffee = coffeeFactory.makeCoffee()
expert = coffeeFactory.makeExpert()

coffee.getDescription()
expert.getDescription()