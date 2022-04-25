const express = require('express');
const router = express.Router();
const getCompanyOverview = require('../../utils/stock');
const Stock = require('../../models/Stocks');

// @route POST api/stocks
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
