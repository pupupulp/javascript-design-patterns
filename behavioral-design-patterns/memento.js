/**
 * Memento Class
 */
class Brain {
	constructor(content) {
		this._content = content
	}

	getKnowledge() {
		return this._content
	}
}

/**
 * Model Class for Person
 */
class Person {
	constructor() {
		this._content = ''
	}

	learn(concept) {
		this._content = this._content + '\n' + concept
		if(Math.random() < 0.5) this.retain()
		else this.forget(concept)
	}

	getKnowledge() {
		return this._content
	}

	retain() {
		return new Brain(this._content)
	}

	forget(concept) {
		this._content = this._content.replace(concept, '')
		return new Brain(this._content)
	}

	recall(brain) {
		this._content = brain.getKnowledge()
	}
}

/**
 * Usage
 */
const person = new Person()
var knowledge = new Brain()

knowledge = person.learn('Yesterday is sunday')
knowledge = person.learn('Today is monday')
knowledge = person.learn('Tomorrow is tuesday')
knowledge = person.learn('Tomorrow tomorrow is wednesday')
console.log(person.getKnowledge())

if(knowledge)
	person.recall(knowledge)

console.log(person.getKnowledge())

