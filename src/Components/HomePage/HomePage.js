import React from 'react';
import BNS from './Components/BNS/BNS';
import NavComponent from './Components/Nav/Nav';
import './HomePage.css';

function HomePage() {
	return (
		<div className="HomePageScreen">
			<NavComponent />
			<BNS />
		</div>
	);
}

export default HomePage;
