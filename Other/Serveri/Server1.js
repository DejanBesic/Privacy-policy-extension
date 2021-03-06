var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/dmpolicies/policy.xml', function (req, res) {
    res.send(privacyExample);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000.');
});


var privacyExample = `<?xml version="1.0"?>
<privacy_policy xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="schema.xsd">
	<publisher>
		<email>dejanbesic@yahoo.com</email>
		<name>Dejan Besic</name>
		<contact>1234567890</contact>
		<creation_date>2019-03-22</creation_date>
	</publisher>
	<policies>
		<personal_data>
			<name>Personal data</name>
			<description>Perosnal data description</description>
			<email>
				<name>Email</name>
				<description>We are using your email for ...</description>
			</email>
			<address>
				<name>Address</name>
				<description>This site will require your address when you register.</description>
			</address>
			<credentials>
				<name>Credentials</name>
				<description>This site requires Gmail or Facebook credentials for login.</description>
			</credentials>
			<contact_info>
				<name>Contact info</name>
				<description>This site will require your contact info during registration.</description>
			</contact_info>
			<payment_info>
				<name>Payment info</name>
				<description>This site will require payment info while purchasing items.</description>
			</payment_info>
		</personal_data>
		<location>
			<name>Location</name>
			<description>Location description</description>
			<gps>
				<name>GPS</name>
				<description>We would like to use your GPS for...</description>
			</gps>
			<ip>
				<name>IP address</name>
				<description>We would like to use your IP address.</description>
			</ip>
			<sensor_data>
				<name>Sensor data of device</name>
				<description>Your device may have sensors that can be used to better understand your location and movement. For example, an accelerometer can be used to determine your speed and a gyroscope to figure out your direction of travel.</description>
			</sensor_data>
			<nearby_info>
				<name>Information about things near your device</name>
				<description>If you use Google’s Location services on Android, we can improve the performance of apps that rely on your location, like Google Maps. If you use Google’s Location services, your device sends information to Google about its location, sensors (like accelerometer), and nearby cell towers and Wi-Fi access points (like MAC address and signal strength). All these things help to determine your location. You can use your device settings to enable Google Location services.</description>
			</nearby_info>
		</location>
		<ssl>
			<name>SSL</name>
			<description>Some SSL description</description>
		</ssl>
		<camera>
			<name>Camera usage</name>
			<description>Camera is required for...</description>
		</camera>
		<microphone>
			<name>Microphone usage</name>
			<description>Microphone is required for...</description>
		</microphone>
		<track_activity>
			<name>Tracking activity</name>
			<description>Some tracking activity description</description>
			<searching_terms>
				<name>Terms you search for</name>
				<description>Tearms you search for improves...</description>
			</searching_terms>
			<content>
				<name>Videos, interactions with ads, audio</name>
				<description>We are collecting data about content you search for to improve recommendations for you.</description>
			</content>
			<purchase_activity>
				<name>Purchasing history</name>
				<description>We are collecting data about purchasing history to improve recommendations for you.</description>
			</purchase_activity>
			<people>
				<name>People with whom you communicate or share content</name>
			</people>
		</track_activity>
		<javascript>
			<name>Javascript</name>
			<description>Some javascript description</description>
		</javascript>
		<plug_ins>
			<name>Plug-ins</name>
			<description>Some plug-in description</description>
		</plug_ins>
		<downloads>
			<name>Downloads</name>
			<description>Some downloads description</description>
		</downloads>
	</policies>
</privacy_policy>`;