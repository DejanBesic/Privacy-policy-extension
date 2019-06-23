var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/dmpolicies/policy.xml', function (req, res) {
    res.send(privacyExample);
});

app.listen(5002, function () {
    console.log('Example app listening on port 5002.');
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
		<cookies>
			<name>Cookies</name>
			<description>Cookies description</description>
			<session>
				<name>Session</name>
				<expiration>1234567890</expiration>
				<description>Session description</description>
			</session>
			<persistent>
				<name>Persistent</name>
				<expiration>1234567890</expiration>
				<description>Persistent description</description>
			</persistent>
			<third_party>
				<name>Third-party</name>
				<expiration>1234567890</expiration>
				<description>Third-party description</description>
			</third_party>
		</cookies>
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