/**
 * Interface Classes
 */
class HDMIMonitor {
	displayThoughHDMI() {}
}

class VGAMonitor {
	displayThoughVGA() {}
}

/**
 * Adapter Class
 */
class VGAMonitorAdapter {
	constructor(vgaMonitor) {
		this.vgaMonitor = vgaMonitor
	}

	displayThoughHDMI() {
		this.vgaMonitor.displayThoughVGA()
	}
}

/**
 * Main Class Declaration
 */
class Laptop {
	connect(hdmiMonitor) {
		hdmiMonitor.displayThoughHDMI()
	}
}

/**
 * Usage
 */
vgaMonitor = new VGAMonitor()
vgaMonitorAdapter = new VGAMonitorAdapter(vgaMonitor)

laptop = new Laptop()
laptop.connect(vgaMonitorAdapter)