import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT } from '../endpoint';
import '../UserHome/UserHome.css';
const AdminHome = () => {
	const [pizzas, setPizzas] = useState([]);
	const [fields, setFields] = useState('');
	useEffect(() => {
		let getData = async () => {
			let req = await fetch(`${BACKEND_ENDPOINT}/user/pizzas`, {
				headers: {
					authorization: localStorage.getItem('OvenStoryPizzaAdmin'),
				},
			});
			let res = await req.json();
			console.log(res);

			setPizzas(res);

			let fieldsReq = await fetch(`${BACKEND_ENDPOINT}/admin/fields`, {
				headers: {
					authorization: localStorage.getItem('OvenStoryPizzaAdmin'),
				},
			});
			let fieldsRes = await fieldsReq.json();
			setFields(fieldsRes);
			console.log(fieldsRes);
		};
		getData();
	}, []);
	return (
		<div className='admin-home container'>
			{pizzas && fields ? (
				<div>
					<h3 className='text-center'>Available Pizzas and Qty:</h3>
					<table className='table mt-3'>
						<thead className='thead-dark'>
							<tr>
								<th scope='col'>S No.</th>
								<th scope='col'>Name</th>
								<th scope='col'>Price</th>
								<th scope='col'>Qty</th>
							</tr>
						</thead>
						<tbody>
							{pizzas &&
								pizzas.map((pizza, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{pizza.name}</td>
											<td>{pizza.price}</td>
											<td>{pizza.qty}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
					<Link to='/admin/addItem' className='d-flex justify-content-center'>
						<button type='button' className='btn btn-danger '>
							Add Pizzas
						</button>
					</Link>
					<h3 className='mt-5 text-center'>Available Items to Customize Pizza</h3>
					<table className='table mt-3 mb-5'>
						<thead className='thead-dark'>
							<tr>
								<th scope='col'>S No.</th>
								<th scope='col'>Item Name</th>
								<th scope='col'>QTY</th>
								<th scope='col'>S No.</th>
								<th scope='col'>Item Name</th>
								<th scope='col'>QTY</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>thinCrust</td>
								<td>{fields.thinCrust}</td>
								<td>12</td>
								<td>flatBreadCrust</td>
								<td>{fields.flatBreadCrust}</td>
							</tr>
							<tr>
								<td>2</td>
								<td>neapolitan</td>
								<td>{fields.neapolitan}</td>
								<td>13</td>
								<td>classicHandTossed</td>
								<td>{fields.classicHandTossed}</td>
							</tr>
							<tr>
								<td>3</td>
								<td>cheeseBrust</td>
								<td>{fields.cheeseBrust}</td>
								<td>14</td>
								<td>pesto</td>
								<td>{fields.pesto}</td>
							</tr>
							<tr>
								<td>4</td>
								<td>hummus</td>
								<td>{fields.hummus}</td>
								<td>15</td>
								<td>marinara</td>
								<td>{fields.marinara}</td>
							</tr>
							<tr>
								<td>5</td>
								<td>whiteGarlic</td>
								<td>{fields.whiteGarlic}</td>
								<td>16</td>
								<td>garlicRanch</td>
								<td>{fields.garlicRanch}</td>
							</tr>
							<tr>
								<td>6</td>
								<td>mozzarella</td>
								<td>{fields.mozzarella}</td>
								<td>17</td>
								<td>cheddar</td>
								<td>{fields.cheddar}</td>
							</tr>
							<tr>
								<td>7</td>
								<td>gorgonzola</td>
								<td>{fields.gorgonzola}</td>
								<td>18</td>
								<td>pecorinoRomano</td>
								<td>{fields.pecorinoRomano}</td>
							</tr>
							<tr>
								<td>8</td>
								<td>tomato</td>
								<td>{fields.tomato}</td>
								<td>19</td>
								<td>sweetCorn</td>
								<td>{fields.sweetCorn}</td>
							</tr>
							<tr>
								<td>9</td>
								<td>bacon</td>
								<td>{fields.bacon}</td>
								<td>20</td>
								<td>mushroom</td>
								<td>{fields.mushroom}</td>
							</tr>
							<tr>
								<td>10</td>
								<td>onions</td>
								<td>{fields.onions}</td>
								<td>21</td>
								<td>meat</td>
								<td>{fields.meat}</td>
							</tr>
							<tr>
								<td>11</td>
								<td>spinach</td>
								<td>{fields.spinach}</td>
								<td>22</td>
								<td>pepperoni</td>
								<td>{fields.pepperoni}</td>
							</tr>
						</tbody>
					</table>
					<Link to='/admin/customFields' className='d-flex justify-content-center m-5'>
						<button type='button' className='btn btn-danger '>
							Add More Items
						</button>
					</Link>
				</div>
			) : (
				<div className='loader'>Loading...</div>
			)}
		</div>
	);
};

export default AdminHome;
