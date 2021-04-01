import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './AdminAddItem.css';
const AdminAddItem = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [isLoading, setLoading] = useState(false);

	const postData = async () => {
		if (!name && !price && !image && !description && !type) {
			alert('Input field should not be empty');
		} else {
			setLoading(true);
			const data = { name, type, price, image, description };
			console.log(type);
			const req = await fetch(`${BACKEND_ENDPOINT}/user/pizzas`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('OvenStoryPizzaAdmin'),
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();

			console.log(res);
			setLoading(false);
			window.location.href = `${FRONTEND_ENDPOINT}/admin/home`;
		}
	};
	return (
		<div className='AdminAddItem container d-flex justify-content-center'>
			<div className='card add-item-card-width mt-5 '>
				<div className='card-body'>
					<div className='form-group'>
						<label htmlFor='name'>Pizza Name:</label>
						<input
							type='text'
							className='form-control'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='price'>
							Price: <em>(In Rupees)</em>
						</label>
						<input
							type='text'
							className='form-control'
							id='price'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='type'>Type:</label>
						<select
							name='type'
							id='type'
							className='form-control'
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<option value=''>--select type--</option>
							<option value='veg'>Veg</option>
							<option value='non-veg'>Non-Veg</option>
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='image'>Image URL:</label>
						<input
							type='text'
							className='form-control'
							id='image'
							value={image}
							onChange={(e) => setImage(e.target.value)}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='description'>Description:</label>
						<textarea
							name='description'
							id='description'
							rows='3'
							className='form-control'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						></textarea>
					</div>

					<button
						type='button'
						className='btn btn-primary form-control'
						onClick={postData}
						disabled={isLoading ? true : false}
					>
						{isLoading ? 'Loading...' : 'Add Pizza'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminAddItem;
