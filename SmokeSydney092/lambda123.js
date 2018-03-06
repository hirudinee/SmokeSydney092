let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	callback(null, 'Successfully executed');

	ddb.put({
		TableName: 'Test',
		Item: {
			'key': 'value'
		}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});



}