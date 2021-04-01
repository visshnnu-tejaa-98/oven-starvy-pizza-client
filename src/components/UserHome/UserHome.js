import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/pizza-logo.svg';
import { BACKEND_ENDPOINT } from '../endpoint';
import './UserHome.css';

const UserHome = () => {
	const [pizzas, setPizzas] = useState('');
	console.log(pizzas);

	useEffect(() => {
		const getData = async () => {
			const req = await fetch(`${BACKEND_ENDPOINT}/user/pizzas`, {
				headers: {
					authorization: localStorage.getItem('Oven Starvy Pizza'),
				},
			});
			const res = await req.json();
			console.log(res);
			setPizzas(res);
		};
		getData();

		// const postData = async () => {
		// 	const req = await fetch(`${BACKEND_ENDPOINT}/user/pizzas`, {
		// 		method: 'POST',
		// 		headers: {
		// 			authorization: localStorage.getItem('Oven Starvy Pizza'),
		// 		},
		// 	});
		// 	const res = await req.json();
		// 	console.log(res);
		// };
		// postData();
	}, []);

	return (
		<div className='user-home  '>
			<div className='d-flex justify-content-center my-3'>
				<img src={logo} alt='' className='user-home-logo-heading' />
				<h1 className='text-danger user-home-heading'>Available Pizzas</h1>
			</div>
			<section className='mt-5 d-flex justify-content-center'>
				<div className='row d-flex justify-content-center'>
					{pizzas ? (
						pizzas.map((pizza, index) => {
							return (
								<div className='col-sm-12 col-md-5 col-lg-3 card user-card-width m-3' key={index}>
									<img src={pizza.image} className='card-img-top' alt='...' />
									<div className='card-body'>
										<h5 className='card-title'>{pizza.name}</h5>
										<p className='card-text'>{pizza.description}</p>
										<h5>₹ {pizza.price}</h5>
										{/* <Link to='#' className='btn btn-danger'>
											Order
										</Link> */}
										<Link to={`/user/pizza/${pizza._id}`}>
											<button type='button' className='btn btn-primary' data-toggle='modal'>
												Customize
											</button>
										</Link>
									</div>
								</div>
							);
						})
					) : (
						<div className='loader'>Loading...</div>
					)}
				</div>
			</section>
			<section className='d-flex justify-content-center mb-4'>
				{/* <button type='button' className='btn btn-danger button-customize '>
					<img src={logo} alt='' className='pizza-logo-customize ' /> Customize Your Pizza
				</button> */}
			</section>
		</div>
	);
};

export default UserHome;
