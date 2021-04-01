import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Forgot from './components/Auth/Forgot';
import Reset from './components/Auth/Reset';
import UserHome from './components/UserHome/UserHome';
import AdminRegister from './components/Auth/AdminAuth/Register';
import AdminLogin from './components/Auth/AdminAuth/Login';
import AdminForgot from './components/Auth/AdminAuth/Forgot';
import AdminHome from './components/AdminHome/AdminHome';
import AdminAddItem from './components/AdminAddItem/AdminAddItem';
import Customize from './components/Customize/Customize';
import AdminCustomFields from './components/AdminAddItem/AdminCustomFields';
import AdminReset from './components/Auth/AdminAuth/Reset';

import dotenv from 'dotenv';
dotenv.config();

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<LandingPage />
				</Route>
				<Route path='/user/register' exact>
					<Register />
				</Route>
				<Route path='/user/login' exact>
					<Login />
				</Route>
				<Route path='/user/forgot' exact>
					<Forgot />
				</Route>
				<Route path='/user/reset' exact>
					<Reset />
				</Route>
				<Route path='/user/home' exact>
					<UserHome />
				</Route>
				<Route path='/user/pizza/:id' exact>
					<Customize />
				</Route>
				<Route path='/admin/register' exact>
					<AdminRegister />
				</Route>
				<Route path='/admin/login' exact>
					<AdminLogin />
				</Route>
				<Route path='/admin/forgot' exact>
					<AdminForgot />
				</Route>
				<Route path='/admin/reset' exact>
					<AdminReset />
				</Route>
				<Route path='/admin/home' exact>
					<AdminHome />
				</Route>
				<Route path='/admin/addItem' exact>
					<AdminAddItem />
				</Route>
				<Route path='/admin/customFields' exact>
					<AdminCustomFields />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
