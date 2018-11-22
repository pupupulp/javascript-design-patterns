/**
 * Implements function to simulate implementing of interface classes
 * @param {[type]} implementer.pseudoInterface [description]
 */
function Implements(implementer, pseudoInterface) {
	for(property in pseudoInterface) {
		if(typeof pseudoInterface[property] === "function")
			if(typeof implementer[property] != "function")
				throw new Implements.functionNotImplemented(
						implementer.constructor.name,
						property,
						pseudoInterface.constructor.name
					);
	}
}

/**
 * [functionNotImplemented description]
 * @param  {[type]} implementing    [description]
 * @param  {[type]} implemented     [description]
 * @param  {[type]} pseudoInterface [description]
 * @return {[type]}                 [description]
 */
Implements.functionNotImplemented = function(implementing, implemented, pseudoInterface) {
	return this.implementing + " does not implement function: " + this.implemented;
}

module.exports = {
	Implements: Implements
}