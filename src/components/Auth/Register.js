import React, { useState } from 'react';
import pizza from '../images/main.svg';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './Auth.css';
const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const postData = async () => {
		setIsLoading(true);
		if (name && email && password) {
			let data = {
				name,
				email,
				password,
			};
			console.log(data);
			let req = await fetch(`${BACKEND_ENDPOINT}/user/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const registerStatus = await req.json();
			console.log(registerStatus);
			if (registerStatus.message === 'User Already Exists') {
				alert(registerStatus.message, +'please try with another email');
				window.location.href = `${FRONTEND_ENDPOINT}/user/register`;
			} else {
				window.location.href = `${FRONTEND_ENDPOINT}/user/login`;
			}
		} else {
			alert('Input field should not be empty');
		}
	};

	return (
		<div className='register container mb-5'>
			<div className='row text-center d-flex justify-content-center'>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5'>
					<img src={pizza} alt='' className='eating-pizza ' />
				</div>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5  form  '>
					<div className='card card-shadow '>
						<div className='card-body'>
							<div className='card-title h3'>Register Here</div>
							<div className='form-group'>
								<label htmlFor='name' className='d-flex justify-content-left'>
									Name:
								</label>
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
								<label htmlFor='email' className='d-flex justify-content-left'>
									Email:
								</label>
								<input
									type='email'
									className='form-control'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password' className='d-flex justify-content-left'>
									Password
								</label>
								<input
									type='password'
									className='form-control'
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className='d-flex justify-content-between'>
								<small>
									already have account? <a href='./login'>login here</a>
								</small>
								<small>
									<a href='./forgot'>forgot password?</a>
								</small>
							</div>

							<button
								type='submit'
								className='btn btn-primary form-control mt-2'
								onClick={postData}
								disabled={isLoading ? true : false}
								// disabled
							>
								{isLoading ? 'Registering' : 'Register'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
