/**
 * Algorithms for problem
 */
const askFriends = problem => {
	console.log('You can do it')
}

const askFamily = problem => {
	console.log('We are here to support you')
}

const askGod = problem => {
	console.log('Im with you always')
}

/**
 * Implementation of Strategy
 */
const person = problem => {
	if(problem.length <= 10) return askFriends 
	else if(problem.length > 10 && problem.length <= 50) return askFamily
	else return askGod
}

/**
 * Usage
 */
const shortProblem = 'Blah blah'
const mediumProblem = 'Blah blah blah blah'
const longProblem = 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah'

const friendlyHelp = person(shortProblem)
const familyHelp = person(mediumProblem)
const godlyHelp = person(longProblem)

friendlyHelp(shortProblem)
familyHelp(mediumProblem)
godlyHelp(longProblem)