import { Link } from 'react-router-dom';
import pizza from '../images/main.svg';
import logo from '../images/pizza-logo.svg';
import './LandingPage.css';
const LandingPage = () => {
	return (
		<div className='register container  mb-5'>
			<div className='row'>
				<div className='col col-lg-6'>
					<img src={pizza} alt='' className='eating-pizza' />
				</div>
				<div className='col col-lg-6 mt-5 text-center'>
					<h1 className='bannar-overlay-text mt-5'>Hangout?? </h1>
					<h1 className='bannar-overlay-text'>Order Pizza Now!!! </h1>
				</div>
			</div>
			<div className='section d-flex justify-content-center mt-5'>
				<Link to='/user/login'>
					<button type='button' className='btn btn-danger button '>
						<img src={logo} alt='' className='pizza-logo ' /> Login to Order Pizza
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
