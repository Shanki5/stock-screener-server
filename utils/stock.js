const request = require('postman-request');


const getCompanyOverview = (companyName, callback) => {
	const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + companyName + '&apikey=RMTNCOWZ8Q8RBWZ3'

	request.get({
		url: url,
		json: true,
		header: {'User-Agent': 'request'}
	}, (err, res, data) => {
		if(err) {
			console.log('Error', err);
		} else if(res.statusCode !== 200) {
			console.log('Status: ', res.statusCode);
		} else {
			console.log(data);
			callback(undefined, data)
		}
	});
}
module.exports = getCompanyOverview
