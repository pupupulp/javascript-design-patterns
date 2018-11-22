const News = (title, content) => ({
	title: title,
	content: content
})

/**
 * Subscribers Class
 */
class NewsEnthusiasts {
	constructor(name) {
		this._name = name
	}

	broadcast(news) {
		console.log(this._name, 'has received a news: ', news.title, '\nAbout: \n', news.content)
	}
}

/**
 * Broadcaster Class
 */
class NewsBoard {
	constructor() {
		this._subscribers = []
	}

	subscribe(newsEnthusiast) {
		this._subscribers.push(newsEnthusiast)
	}

	publishNews(news) {
		this._subscribers.forEach(subscriber => {
			subscriber.broadcast(news)
		})
	}
}

/**
 * Usage
 */
const notMe = new NewsEnthusiasts('Not Me')
const notMyself = new NewsEnthusiasts('Not Myself')

const newsBoard = new NewsBoard()

newsBoard.subscribe(notMe)
newsBoard.subscribe(notMyself)

newsBoard.publishNews(News(
	'Gov’t employees to receive up to P25,000 cash bonus in December',
	`
		Employees working for government agencies that generated savings will receive another cash incentive in December, Budget Secretary Benjamin Diokno said Wednesday.

		The incentive covers regular, contractual, or casual positions, full-time or part-time in national government agencies, state universities and colleges, government-owned and controlled corporations, local water districts, and local government units.
	`
))