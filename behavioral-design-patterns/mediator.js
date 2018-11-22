/**
 * Mediator Class
 */
class Messenger {
	displayConversation(user, message) {
		const time = new Date
		const sender = user.getName()

		console.log(time + '[' + sender + ']: ' + message)
	}
}

/**
 * Model Class for User
 */
class User {
	constructor(name, messenger) {
		this.name = name
		this.messenger = messenger
	}

	getName() {
		return this.name
	}

	send(message) {
		this.messenger.displayConversation(this, message)
	}
}

/**
 * Usage
 */
const messenger = new Messenger()

const me = new User('Me', messenger)
const myself = new User('Myself', messenger)

me.send('Hi Myself!')
myself.send('Hello Me!')