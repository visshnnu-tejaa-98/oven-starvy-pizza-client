import React, { useState } from 'react';
import { BACKEND_ENDPOINT } from '../endpoint';
import pizza from '../images/main.svg';
const Forgot = () => {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isMailSent, setIsMailSent] = useState(false);
	const sendMail = async (e) => {
		if (!email) {
			e.preventDefault();
			alert('Input field should not be empty');
		} else {
			setIsLoading(true);
			const data = { email };
			let req = await fetch(`${BACKEND_ENDPOINT}/user/forgot`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			setIsMailSent(true);
		}
	};
	return (
		<div className='forgot container'>
			<div className='row text-center d-flex justify-content-center'>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5'>
					<img src={pizza} alt='' className='eating-pizza ' />
				</div>
				<div className='col col-lg-6 col-md-12 col-sm-12 mt-5  form  '>
					<div className='card card-shadow mt-5'>
						<div className='card-body'>
							<div className='card-title h3'>Enter your Email </div>

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

							<small className='text-danger'>check your email to reset password * </small>
							<button
								type='submit'
								className='btn btn-primary form-control mt-2'
								onClick={sendMail}
							>
								Send Mail
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forgot;
