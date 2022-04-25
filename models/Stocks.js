const mongoose = require('mongoose');

const StockOverviewSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	asset_type: {
		type: String,
		required: true
	},
	sector: {
		type: String,
		required: true
	},
	market_capitalization: {
		type: Number,
		required: true
	},
	pe_ratio: {
		type: Number,
		required: true
	},
	book_value: {
		type: Number,
		required: true
	},
	dividend_per_share: {
		type: Number,
		required: true
	},
	dividend_yield: {
		type: Number,
		required: true
	},
	eps: {
		type: Number,
		required: true
	},
	revenue_per_share: {
		type: Number,
		required: true
	},
	profit_margin: {
		type: Number,
		required: true
	},
	roe: Number, 
	pb_ratio: {
		type: Number,
		required: true
	}
});

module.exports = Stock = mongoose.model('stock', StockOverviewSchema);
