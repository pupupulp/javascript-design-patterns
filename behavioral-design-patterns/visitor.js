/**
 * Model Classes
 */
class Anesthesiologists {
	ask() {
		console.log('Where do you want me to inject?')
	}

	waits(patient) {
		patient.consultDoctor(this)
	}
}

class Cardiologists {
	ask() {
		console.log('How was your heart?')
	}

	waits(patient) {
		patient.consultDoctor(this)
	}
}

/**
 * Implementation of Visitor
 */
const patient = {
	consultDoctor(doctor) {
		doctor.ask()
	}
}

/**
 * Usage
 */
const anesthesiologists = new Anesthesiologists()
const cardiologists = new Cardiologists()

anesthesiologists.waits(patient)
cardiologists.waits(patient)