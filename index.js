const express = require('express')
const getCompanyOverview = require('./utils/stock')
var cors = require('cors');

const app = express();

app.use(cors({origin: true, credentials: true}));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/stock-overview/:company', (req, res) => {

	if(!req.params.company){
		console.log(req.query)
		return res.send({
			error: 'You must provide a company name'
		})
	}

	getCompanyOverview(req.params.company, (err, data) => res.send(data));

});
	
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
