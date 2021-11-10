import React, { useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../../../../App.js';
import './BNS.css';

function BNS() {
	let TrendingCoins = [];

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/search/trending')
			.then((response) => {
				console.log(response.data.coins);
				response.data.coins.map((Coins) => {
					TrendingCoins.push(Coins);
				});
            });
        console.log(TrendingCoins)
		// return () => {};
	}, [LoadingScreen]);
	return (
		<div id="scroll-container">
			<div id="scroll-text">
				This is scrolling text lorem etc fdvenbeb ebebeb ebrb retbetbewrfewv
			</div>
		</div>
	);
}

export default BNS;
