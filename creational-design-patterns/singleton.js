/**
 * Implementation of Singleton Object
 * @param  {String} ) {	const      fullName [description]
 * @return {[type]}   [description]
 */
const me = (function() {
	const fullName = "Eagan Charles Martin"
	const jobDescription = "Applications Developer"

	return {
		getFullName: () => console.log(fullName),
		getJobDescription: () => console.log(jobDescription)
	}
}())

/**
 * Usage
 */
me.getFullName()
me.getJobDescription()
