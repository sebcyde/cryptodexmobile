import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import EntryScreen from '../../../EntryScreen/EntryScreen';
import './BNS.css';

function BNS() {
	let TrendingCoins = [];
	const returnedSpan = useRef();
	const [Scroller, setScroller] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
			)
			.then((response) => {
				console.log(response.data);
				// response.data.map((Coins) => {
				// 	return TrendingCoins.push(
				// 		<span className="returnedCoinContainer" ref={returnedSpan}>
				// 			<h1 className="returnedCoinTitle">{Coins.id}</h1>
				// 			<h2>{Coins.current_price}</h2>
				// 		</span>
				// 	);
				// });

				console.log(TrendingCoins);
			});

		return () => {};
	}, [EntryScreen]);

	return (
		<div id="scroll-container">
			<div id="scroll-text">test text</div>
			<div className="BNSMain">{TrendingCoins}</div>
		</div>
	);
}

export default BNS;
