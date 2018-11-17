/**
 * Supplier Model Classes
 */
class Magnolia {
	supplyMeat() {
		console.log('Chicken Meat')
	}
}

class Monterey {
	supplyMeat() {
		console.log('Pork Meat')
	}
}

/**
 * General Model Class
 */
class Supplier {
	takeOrders() {
		const supplier = this.makeSupplier()
		supplier.supplyMeat()
	}
}

/**
 * Implementation of classes
 */
class ChickenMeatSupplier extends Supplier {
	makeSupplier() {
		return new Magnolia()
	}
}

class PortMeatSupplier extends Supplier {
	makeSupplier() {
		return new Monterey()
	}
}

/**
 * Usage
 * @type {ChickenMeatSupplier}
 */
const chickenMeatSupplier = new ChickenMeatSupplier()
chickenMeatSupplier.takeOrders()

/**
 * Usage
 * @type {PorkMeatSupplier}
 */
const porkMeatSupplier = new PorkMeatSupplier()
porkMeatSupplier.takeOrders()