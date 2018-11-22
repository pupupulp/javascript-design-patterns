var myClass = require('../implements.js')

/**
 * Interface Class
 */
function IHDMIMonitor() {}
IHDMIMonitor.prototype.displayThroughHDMI = function(){}

function IVGAMonitor() {}
IVGAMonitor.prototype.displayThroughVGA = function(){}

/**
 * Model Classes
 */
function HDMIMonitor() {
	myClass.Implements(this, [new IHDMIMonitor()])
}
HDMIMonitor.prototype.displayThroughHDMI = function(message = "Connected to HDMI"){ 
	console.log(message) 
}

function VGAMonitor() {
	myClass.Implements(this, [new IVGAMonitor()])
}
VGAMonitor.prototype.displayThroughVGA = function(message = "Connected to VGA"){ 
	console.log(message) 
}

/**
 * Adapter Class
 */
class VGAMonitorAdapter {
	constructor(vgaMonitor) {
		this.vgaMonitor = vgaMonitor
	}

	displayThroughHDMI() {
		this.vgaMonitor.displayThroughVGA("Connected to VGA via Adapter")
	}
}

/**
 * Main Class Declaration
 */
class Laptop {
	connect(hdmiMonitor) {
		hdmiMonitor.displayThroughHDMI()
	}
}

/**
 * Usage
 */
hdmiMonitor = new HDMIMonitor()

vgaMonitor = new VGAMonitor()
vgaMonitorAdapter = new VGAMonitorAdapter(vgaMonitor)

laptop = new Laptop()
laptop.connect(hdmiMonitor)
laptop.connect(vgaMonitorAdapter)