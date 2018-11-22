/**
 * Model Class with complex methods
 */
function NeverGonnaGiveYouUp() {}
NeverGonnaGiveYouUp.prototype = {
	verse: {
		one: function() {
			console.log(`
				We're no strangers to love
				You know the rules and so do I
				A full commitment's what I'm thinking of
				You wouldn't get this from any other guy
			`)
		},
		two: function() {
			console.log(`
				We've known each other for so long
				Your heart's been aching, but
				You're too shy to say it
				Inside, we both know what's been going on
				We know the game and we're gonna play it
			`)
		}
	},
	bridge: {
		one: function() {
			console.log(`
				I just wanna tell you how I'm feeling
				Gotta make you understand
			`)
		},
		two: function() {
			console.log(`
				And if you ask me how I'm feeling
				Don't tell me you're too blind to see
			`)
		}
	},
	chorus: function() {
		console.log(`
			Never gonna give you up
			Never gonna let you down
			Never gonna run around and desert you
			Never gonna make you cry
			Never gonna say goodbye
			Never gonna tell a lie and hurt you
		`)
	},
	adlib: function() {
		console.log(`
			(Ooh, give you up)
			(Ooh, give you up)
			Never gonna give, never gonna give
			(Give you up)
			Never gonna give, never gonna give
			(Give you up)
		`)
	}
}

/**
 * Facade Class
 */
function RickAstley(song) { this.constructor(song) }
RickAstley.prototype = {
	constructor: function(song) {
		this.song = song
	},
	rick: function() {
		this.song.verse.one()
		this.song.bridge.one()
		this.song.chorus()

		this.song.verse.two()
		this.song.bridge.two()
		this.song.chorus()
		this.song.chorus()
	},
	roll: function() {
		this.song.adlib()
		this.song.verse.two()
		this.song.bridge.one()
		this.song.chorus()
		this.song.chorus()
		this.song.chorus()
	}
}

/**
 * Usage
 */
const rickAstley = new RickAstley(new NeverGonnaGiveYouUp())
rickAstley.rick()
rickAstley.roll()