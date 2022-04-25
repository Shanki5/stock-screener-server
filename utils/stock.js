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
			const {
				Symbol: _id,
				Name: name,
				Description: description,
				AssetType: asset_type,
				Sector: sector,
				MarketCapitalization: market_capitalization,
				PERatio: pe_ratio,
				BookValue: book_value,
				DividendPerShare: dividend_per_share,
				DividendYield: dividend_yield,
				EPS: eps,
				RevenuePerShareTTM: revenue_per_share,
				ProfitMargin: profit_margin,
				ReturnOnEquity: roe,
				PriceToBookRatio: pb_ratio
			} = data;

			const StockOverview = {
				_id,
				name,
				description,
				asset_type,
				sector,
				market_capitalization,
				pe_ratio,
				book_value,
				dividend_per_share,
				dividend_yield,
				eps,
				revenue_per_share,
				profit_margin,
				roe,
				pb_ratio
			};
			callback(StockOverview)
		}
	});
}
module.exports = getCompanyOverview
