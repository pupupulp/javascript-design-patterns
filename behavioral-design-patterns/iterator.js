/**
 * Model Class for Channel
 */
class Channel {
	constructor(no, description) {
		this.no = no
		this.description = description
	}

	getChannel() {
		console.log('Channel No. ' + this.no + ': ' + this.description)
	}

	getNo() {
		return this.no
	}

	getDescription() {
		return this.description
	}
}

/**
 * Iterator Class
 */
class ChannelList {
	constructor() {
		this.channels = []
	}

	addChannel(channel) {
		this.channels.push(channel) 
	}

	removeChannel(channel) {
		const toRemove = channel.getNo()
		this.channels = this.channels.filter(channel => {
			return channel.getNo() !== toRemove
		})
		console.log('Removed Channel No. ' + channel.getNo() + ': ' + channel.getDescription())
	}
}

/**
 * Usage
 */
const channelList = new ChannelList()

channelList.addChannel(new Channel(7, 'GMA'))
channelList.addChannel(new Channel(2, 'ABS-CBN'))

channelList.channels.forEach(channel => {
	channel.getChannel()
})

channelList.removeChannel(new Channel(7, 'GMA'))

channelList.channels.forEach(channel => {
	channel.getChannel()
})