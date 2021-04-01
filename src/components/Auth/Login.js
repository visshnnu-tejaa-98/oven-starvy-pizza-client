import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import pizza from '../images/main.svg';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const putData = async (e) => {
		setIsLoading(true);
		if (!email && !password) {
			e.preventDefault();
			alert('Input field should not be empty');
		} else {
			let data = { email, password };
			let req = await fetch(`${BACKEND_ENDPOINT}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			let res = await req.json();
			console.log(res);
			localStorage.setItem('Oven Starvy Pizza', res.token);
			if (res.message === 'Allow') {
				window.location.href = `${FRONTEND_ENDPOINT}/user/home`;
			} else {
				alert(res.message);
				window.location.href = `${FRONTEND_ENDPOINT}/user/login`;
			}
		}
	};
	return (
		<div className='login container mb-5'>
			<div className='row text-center d-flex justify-content-center'>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5'>
					<img src={pizza} alt='' className='eating-pizza ' />
				</div>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5  form  '>
					<div className='card card-shadow '>
						<div className='card-body'>
							<div className='card-title h3'>Login Here</div>

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
									no account <a href='./register'>Register here</a>
								</small>
								<small>
									<a href='./forgot'>forgot password?</a>
								</small>
							</div>
							<button
								type='submit'
								className='btn btn-primary form-control mt-2'
								disabled={isLoading ? true : false}
								onClick={putData}
							>
								{isLoading ? 'Loading...' : 'Login'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
