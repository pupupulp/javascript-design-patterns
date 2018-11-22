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
function HDMIMonitor() { myClass.Implements(this, new IHDMIMonitor()) }
HDMIMonitor.prototype.displayThroughHDMI = function(message = "Connected to HDMI"){ 
	console.log(message) 
}

function VGAMonitor() { myClass.Implements(this, new IVGAMonitor()) }
VGAMonitor.prototype.displayThroughVGA = function(message = "Connected to VGA"){ 
	console.log(message) 
}

/**
 * Adapter Class
 */
function VGAMonitorAdapter() { this.constructor(vgaMonitor) }
VGAMonitorAdapter.prototype = {
	constructor: function(vgaMonitor) {
		this.vgaMonitor = vgaMonitor
	},
	displayThroughHDMI: function() {
		this.vgaMonitor.displayThroughVGA("Connected to VGA via Adapter")
	}
}

/**
 * Main Class Declaration
 */
function Laptop() {}
Laptop.prototype.connect = function(hdmiMonitor) {
	hdmiMonitor.displayThroughHDMI()
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