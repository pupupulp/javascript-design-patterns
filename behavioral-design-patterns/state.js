/**
 * States Definition
 */
const response = words => 'Ok, I got it'
const ignore = words => '...'
const defaultMood = words => words

/**
 * Model Class for Person
 */
class Person {
	constructor(mood) {
		this._mood = mood
	}

	setMood(mood) {
		this._mood = mood
	}

	ask(words) {
		console.log(this._mood(words))
	}
}

/**
 * Usage
 */
const person = new Person(defaultMood)

person.ask('Hello there!')

person.setMood(ignore)
person.ask('How are you?')

person.setMood(response)
person.ask('Meet me later ok?')