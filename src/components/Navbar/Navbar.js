import React, { useState } from 'react';
import pizza from '../images/pizza-logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FRONTEND_ENDPOINT } from '../endpoint';
const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const logout = () => {
		let userToken = localStorage.getItem('Oven Starvy Pizza');
		let adminToken = localStorage.getItem('OvenStoryPizzaAdmin');
		if (userToken) {
			localStorage.removeItem('Oven Starvy Pizza');
			window.location.href = `${FRONTEND_ENDPOINT}`;
			setIsLoggedIn(false);
		}
		if (adminToken) {
			localStorage.removeItem('OvenStoryPizzaAdmin');
			window.location.href = `${FRONTEND_ENDPOINT}`;
			// setIsLoggedIn(false);
		}
	};
	return (
		<nav className='navbar navbar-expand-lg navbar-light  container'>
			<div className='d-flex justify-content-center'>
				<Link className='navbar-brand ' to='#'>
					<img src={pizza} alt='' className='pizza-logo' />
					<span className='brand h3 '> Oven Starvy Pizza</span>
				</Link>
			</div>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse  ' id='navbarNav'>
				<ul className='navbar-nav '>
					<li className='nav-item nav-links none '>
						<Link className='nav-link' to='#'>
							Home
						</Link>
					</li>
					<li className='nav-item nav-links none'>
						<Link className='nav-link' to='#'>
							Home
						</Link>
					</li>
					<li className='nav-item nav-links none'>
						<Link className='nav-link' to='#'>
							Home
						</Link>
					</li>
					<li className='nav-item nav-links none'>
						<Link className='nav-link' to='#'>
							Home
						</Link>
					</li>
					<li className='nav-item nav-links none'>
						<Link className='nav-link' to='#'>
							Home
						</Link>
					</li>
					{/* <li className='nav-item nav-links '>
						<Link className='nav-link navlink-style' to='#'>
							Home
						</Link>
					</li> */}
					<li className='nav-item'>
						<Link className='nav-link navlink-style' onClick={logout} to='/user/home'>
							{isLoggedIn ? '' : 'Logout'}
						</Link>
					</li>
					{/* <li className='nav-item'>
						<Link
							className={!isUserLoggedIn ? 'nav-link navlink-style' : 'nav-link navlink-style none'}
							to='/user/login'
						>
							Login
						</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
