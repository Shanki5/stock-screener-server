const express = require('express');
const router = express.Router();
const getCompanyOverview = require('../../utils/stock');
const Stock = require('../../models/Stocks');

// @route GET api/stocks
// @description get all stocks in db
// @access Public
router.get('/', (req, res) => {
	Stock.find()
		.then(stocks => res.json(stocks))
		.catch(err => res.status(404).json({ nostocksfound: 'No Stocks found' }));
});



// @route POST api/stocks/:symbol
// @description add new stock to DB
// @access Public
router.post('/:id', (req, res) => {
	
	console.log(req.params.id)
	getCompanyOverview(req.params.id, (StockOverview) => {

		Stock.create(StockOverview)
			.then(stock => res.json({msg: 'Stock added successfully'}))
			.catch(err => res.status(400).json({error: 'Unable to add this stock'}));
	});

});

module.exports = router;
