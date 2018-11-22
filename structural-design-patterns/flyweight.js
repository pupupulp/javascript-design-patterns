/**
 * Flyweight Classes 
 */
function PepperoniPizza() {}

/**
 * Factory Class
 */
function Chef() { this.constructor() }
Chef.prototype = {
	constructor: function() {
		this.pizzaRecipe = {}
	},
	make: function(recipe) {
		this.pizzaRecipe[recipe] = this.pizzaRecipe[recipe] || (new PepperoniPizza())
		return this.pizzaRecipe[recipe]
	}
}

/**
 * Model Class to serve Pizza
 */
function Pizzeria(chef) { this.constructor(chef) }
Pizzeria.prototype = {
	constructor: function(chef) {
		this.chef = chef
		this.orders = []
	},
	takeOrder: function(recipe, table) {
		this.orders[table] = this.chef.make(recipe)
	},
	serve: function() {
		this.orders.forEach((order, table) => {
			console.log('Serving pizza to table ' + table)
		})
	}
}

/**
 * Usage
 */
const chef = new Chef()
const pizzeria = new Pizzeria(chef)

pizzeria.takeOrder('Pepperoni Pizza', 1)
pizzeria.takeOrder('Hawaiian Pizza', 2)
pizzeria.takeOrder('Cheesy Bacon Pizza', 3)

pizzeria.serve()