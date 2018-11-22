var myClass = require('../implements.js')

/**
 * Interface Class for User
 */
function IAccount() {}
IAccount.prototype = {
	login: function() {},
	logout: function() {}
}

/**
 * Model Class for User
 */
function User() { myClass.Implements(this, new IAccount()) }
User.prototype = {
	login: function() {
		console.log('Successfully logged in')
	},
	logout: function() {
		console.log('Successfully logged out')
	}
}

/**
 * Proxy Class for User
 */
function Security(user) { this.constructor(user) }
Security.prototype = {
	constructor: function(user) {
		this.user = user
	},
	login: function(password, code) {
		switch(true) {
			case !this.authenticate(password): 
				console.log('Failed to authenticate user')
				break
			case !this.twoStepVerification(code):
				console.log('Failed to verify code')
				break
			default:
				this.user.login()
				break
		}
	},
	authenticate: function(password) {
		return password === 'admin'
	},
	twoStepVerification: function(code) {
		return code === '310'
	},
	logout: function() {
		this.user.logout()
	}
}

/**
 * Usage
 */
const user = new Security(new User())

user.login('fail', 'me')
user.login('admin', 'me')

user.login('admin', '310')

user.logout()