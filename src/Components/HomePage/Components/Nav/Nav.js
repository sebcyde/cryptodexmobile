//Sticky Navbar with dropdown that shows links to portfolio/news/search etc

import React from 'react';
import 'materialize-css';
import { Navbar, Icon, NavItem, Dropdown, Divider } from 'react-materialize';
import './Nav.css';

function NavComponent() {
	return (
		<div className="NavContainer">
			<Navbar
				alignLinks="right"
				brand={
					<a className="brand-logo" href="#">
						<i class="material-icons">add</i>
					</a>
				}
				id="mobile-nav"
				menuIcon={
					<Icon>
						<i class="material-icons">dehaze</i>
					</Icon>
				}
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true,
				}}
			>
				<NavItem href="">Getting started</NavItem>
				<NavItem href="components.html">Components</NavItem>
			</Navbar>
		</div>
	);
}

export default NavComponent;
