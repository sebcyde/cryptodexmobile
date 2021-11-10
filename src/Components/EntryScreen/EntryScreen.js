import React from 'react';
import './EntryScreen.css';

function EntryScreen() {
	return (
		<div className="LoadingScreen">
			<img
				src="https://cliply.co/wp-content/uploads/2021/02/372102230_BITCOIN_400px.gif"
				alt="Loading image"
				className="LoadingGif"
			/>
			<h1 className="LoadingTitle">Loading...</h1>
		</div>
	);
}

export default EntryScreen;
