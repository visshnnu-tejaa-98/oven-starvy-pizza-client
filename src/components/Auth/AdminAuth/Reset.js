import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../../endpoint';
import pizza from '../../images/main.svg';
const AdminReset = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const postData = async (e) => {
		if (!email && !password) {
			e.preventDefault();
			alert('Input should not be empty');
		} else {
			setIsLoading(true);
			const data = { email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/admin/reset`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'Password updated Successfully') {
				window.location.href = `${FRONTEND_ENDPOINT}/admin/home`;
			} else {
				alert("Email doesn't match");
				window.location.href = `${FRONTEND_ENDPOINT}/admin/reset`;
			}
		}
	};
	return (
		<div className='reset container'>
			<div className='row text-center d-flex justify-content-center'>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5'>
					<img src={pizza} alt='' className='eating-pizza ' />
				</div>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5  form  '>
					<div className='card card-shadow '>
						<div className='card-body'>
							<div className='card-title h3'>Reset Password</div>

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

							<button
								type='submit'
								className='btn btn-primary form-control mt-2'
								disabled={isLoading ? true : false}
								onClick={postData}
							>
								{isLoading ? 'Loading...' : 'Reset'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminReset;
