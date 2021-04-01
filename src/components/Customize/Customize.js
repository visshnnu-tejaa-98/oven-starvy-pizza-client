import React, { useState, useEffect } from 'react';

import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './Customize.css';
import '../UserHome/UserHome.css';

const Customize = () => {
	const [pizza, setPizza] = useState('');

	const [crustType, setCrustType] = useState('');
	const [sauceType, setSauceType] = useState('');
	const [cheeseType, setCheeseType] = useState('');
	const [toppings, setToppings] = useState([]);
	const [pizzaPrice, setPizzaPrice] = useState(true);
	const [increasedPrice, setIncreasedPrice] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	// const [name, setName] = useState('');

	useEffect(() => {
		let getData = async () => {
			const url = window.location.href.split('/');
			const id = url[url.length - 1];
			const req = await fetch(`${BACKEND_ENDPOINT}/user/pizzas/${id}`, {
				headers: {
					authorization: localStorage.getItem('Oven Starvy Pizza'),
				},
			});
			const res = await req.json();
			console.log(res);
			setPizza(res);
		};
		getData();
	}, []);

	const postData = async (e) => {
		setIsLoading(true);
		let data = { crustType, sauceType, cheeseType, toppings };
		console.log(data);
		let req = await fetch(`${BACKEND_ENDPOINT}/admin/fields`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		let res = await req.json();
		console.log(res);
		if (res.message === 'authentication failed') {
			window.location.href = `${FRONTEND_ENDPOINT}/user/login`;
		}
		setIncreasedPrice(Number(res.addExtraPrice));
		pizza.price = Number(pizza.price);
		console.log(Number(pizza.price));
	};
	const addToppings = (e) => {
		console.log(e.target.value);
		setToppings(toppings.concat([e.target.value]));
		console.log(toppings);
	};

	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const displayRazorpay = async () => {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}
		const object = {
			price: Number(pizza.price),
			increasedPrice: Number(increasedPrice),
		};
		const data = await fetch(`${BACKEND_ENDPOINT}/razorpay`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(object),
		}).then((t) => t.json());

		console.log(increasedPrice);

		const options = {
			key: process.env.REACT_APP_RAZOPAY_KEY,
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			name: 'Oven Starvy Pizza',
			description: 'Thank you for Placing Order in Oven Starvy Pizza',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			// prefill: {
			// 	name,
			// 	email: 'sdfdsjfh2@ndsfdf.com',
			// 	phone_number: '9899999999',
			// },
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<div className='customize container'>
			{pizza ? (
				<div>
					<div className='row d-flex justify-content-center'>
						<div className='col-md-6 col-sm-12'>
							<img src={pizza.image} alt='' className='image-size' />
							<h3 className='mt-3'>{pizza.name}</h3>
							<p>{pizza.description}</p>
							<h4 className='text-danger'>
								₹ {pizza && Number(pizza.price) + Number(increasedPrice)}
							</h4>
						</div>
						<div className='col-md-6 col-sm-12 '>
							<div className='card'>
								<div className='card-body'>
									<h3 className='text-center'>Customize your Pizza</h3>
									<div className='form-group'>
										<label htmlFor='base'>Crust Type:</label>
										<select
											name='base'
											id='base'
											className='form-control'
											value={crustType}
											onChange={(e) => setCrustType(e.target.value)}
										>
											<option value=''>--select crust--</option>
											<option value='thinCrust'>Thin crust</option>
											<option value='flatBreadCrust'>Flat bread crust</option>
											<option value='neapolitan'>Neapolitan </option>
											<option value='classicHandTossed'>Classic hand tossed </option>
											<option value='cheeseBrust'>Cheese rust</option>
										</select>
									</div>
									<div className='form-group'>
										<label htmlFor='base'>Sauce Type:</label>
										<select
											name='base'
											id='base'
											className='form-control'
											value={sauceType}
											onChange={(e) => setSauceType(e.target.value)}
										>
											<option value=''>--select sauce--</option>
											<option value='pesto'>Pesto</option>
											<option value='hummus'>Hummus</option>
											<option value='marinara'>Marinara</option>
											<option value='whiteGarlic'>White garlic</option>
											<option value='garlicRanch'>Garlic ranch</option>
										</select>
									</div>
									<div className='form-group'>
										<label htmlFor='base'>Chesse Type:</label>
										<select
											name='base'
											id='base'
											className='form-control'
											value={cheeseType}
											onChange={(e) => setCheeseType(e.target.value)}
										>
											<option value=''>--select cheese--</option>
											<option value='mozzarella'>Mozzarella</option>
											<option value='cheddar'>Cheddar</option>
											<option value='gorgonzola'>Gorgonzola</option>
											<option value='pecorinoRomano'>Pecorino romano</option>
										</select>
									</div>
									<div className='form-group'>
										<label htmlFor='base'>Toppings:</label>
										<select
											name='base'
											id='base'
											className='form-control'
											value={toppings}
											onChange={addToppings}
											multiple
										>
											<option value='tomato'>Tomato</option>
											<option value='sweetCorn'>Sweet corn</option>
											<option value='bacon'>Bacon</option>
											<option value='mushroom'>Mushroom</option>
											<option value='onions'>Onions</option>
											<option value='meat'>Meat</option>
											<option value='spinach'>Spinach</option>
											<option value='pepperoni'>Pepperoni</option>
										</select>
									</div>
									<button
										type='submit'
										className='btn btn-danger'
										onClick={postData}
										disabled={isLoading ? true : false}
									>
										Customize
									</button>
									{isLoading && (
										<button
											type='submit'
											className='btn btn-primary ml-3'
											onClick={displayRazorpay}
										>
											Order
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='loader'>Loading...</div>
			)}
		</div>
	);
};

export default Customize;
