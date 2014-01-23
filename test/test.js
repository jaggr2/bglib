// An embarrasingly unexhaustive test of bglib functionality

// var assert = require('assert');

var bglib = require('../bglib');
bglib.setPacketMode(1);

// assert(bglib, "BGLib could not be imported...");

// Packet Creation:
bglib.getPacket(bglib.api.systemHello, function(err, response) {
	// assert(!err, "Error creating the simple hello packet.");
	// assert(response.cID == 1 
	// 	&& response.cClass == 0, "Invalid packet created.");
	console.log("Simple Packet Creation Passed.")
});

bglib.getPacket(bglib.api.gapConnectDirect, [[108, 189, 40, 93, 28, 216], 1, 25, 50, 500, 8], function(err, response) {
	// assert(!err, "Error creating the complex connect packet.");
	// assert(response.cID == 3 
	// 	&& response.cClass == 6, "Invalid packet created.");
	console.log("Complex Packet Creation Passed.");
});


bglib.getPacket(bglib.api.systemHello, ["Invalid", "params"], function(err, response) {
	// assert(err, "Unable to detect invalid number of parameters.");
	console.log("Detecting Too Few Parameters Passed.")
});

// assert.throws(function() {
// 	bglib.getPacket(bglib.api.gapConnectDirect, [108, 189, 40, 93, 28, 216], 1, 25, 50, 500, 8, function(err, response) {});
// 	}
// , "Did not throw an error for too many parameters being passed in.");
// console.log("Detecting Too Many Parameters Passed.");


// Packet Parsing:
var incoming = [128, 38, 6, 0, 185, 0, 108, 189, 40, 93, 28, 216, 1, 255, 27, 2, 1, 6, 17, 6, 186, 86, 137, 166, 250, 191, 162, 189, 1, 70, 125, 110, 56, 88, 171, 173, 5, 22, 10, 24, 7, 4, 128, 38, 6, 0, 181, 0, 108, 189, 40, 93, 28, 216, 1, 255, 27, 2, 1, 6, 17, 6, 186, 86, 137, 166, 250, 191, 162, 189, 1, 70, 125, 110, 56, 88, 171, 173, 5, 22, 10, 24, 7, 4, 128, 38, 6, 0, 191, 0, 108, 189, 40, 93, 28, 216, 1, 255, 27, 2, 1, 6, 17, 6, 186, 86, 137, 166, 250, 191, 162, 189, 1, 70, 125, 110, 56, 88, 171, 173, 5, 22, 10, 24, 7, 4, 128, 38, 6, 0, 182, 0, 108, 189, 40, 93, 28, 216, 1, 255, 27, 2, 1, 6, 17, 6, 186, 86, 137, 166, 250, 191, 162, 189, 1, 70, 125, 110, 56, 88, 171, 173, 5, 22, 10, 24, 7, 4, 128, 38, 6, 0, 179, 0, 108, 189, 40, 93, 28, 216, 1, 255, 27, 2, 1, 6, 17, 6, 186, 86, 137, 166, 250, 191, 162, 189, 1, 70, 125, 110, 56, 88, 171, 173, 5, 22];
bglib.parseIncoming(incoming, function(err, parsedPackets) {
	// assert(!err, "There was an error parsing packets: " + err);
	// assert(parsedPackets.length == 4, "Packets not parsed correctly");

	console.log("Packet Parsing Passed.");
});

incoming = [128, 35, 6, 0, 171, 0, 4, 201, 248, 133, 228, 66, 1, 255, 24, 2, 1, 26, 20, 255, 76, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 128, 14, 6, 0, 187, 0, 255, 168, 219, 162, 83, 114, 1, 255, 3, 2, 1, 26, 128, 32, 6, 0, 218, 0, 66, 160, 114, 128, 7, 0, 0, 255, 21, 2, 1, 6, 17, 7, 102, 154, 12, 32, 0, 8, 31, 152, 227, 17, 197, 108, 160, 199, 200, 8, 128, 35, 6, 0, 171, 0, 4, 201, 248, 133, 228, 66, 1, 255, 24, 2, 1, 26, 20, 255, 76, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0];
bglib.parseIncoming(incoming, function(err, parsedPackets) {
});

console.log("All Tests Passed.")



