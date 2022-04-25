const express = require('express')
const connectDB = require('./utils/db');
const getCompanyOverview = require('./utils/stock')
const stocks = require('./routes/api/stocks');
var cors = require('cors');

const app = express();

connectDB();

app.use(cors({origin: true, credentials: true}));

// Init Middleware
app.use(express.json({ extended: false }));


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
	
app.use('/api/stocks',stocks);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
