const mqtt = require('mqtt-packet');


const packet = {
	cmd: 'unsubscribe',
	messageId: 10,
	unsubscriptions: ["hello"]
};


const opts = { protocolVersion: 5 };
let data = mqtt.generate(packet, opts);
print(data);


function print(data) {
	let out = "";
	for (var i = 0; i < data.length; i++) {
		const hex = Number(data[i]).toString(16).padStart(2, '0');
		out = out + "0x" + hex + ", ";
	}

	console.log("[" + out + "]");
}


