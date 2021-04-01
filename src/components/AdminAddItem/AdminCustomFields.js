import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './AdminAddItem.css';
const AdminCustomFields = () => {
	// crust type
	const [thinCrust, setThinCrust] = useState('');
	const [flatBreadCrust, setFlatBreadCrust] = useState('');
	const [neapolitan, setNeapolitan] = useState('');
	const [classicHandTossed, setClassicHandTossed] = useState('');
	const [cheeseBrust, setCheeseBrust] = useState('');

	// sauce types
	const [pesto, setPesto] = useState('');
	const [hummus, setHummus] = useState('');
	const [marinara, setMarinara] = useState('');
	const [whiteGarlic, setWhiteGarlic] = useState('');
	const [garlicRanch, setGarlicRanch] = useState('');

	// cheese Type
	const [mozzarella, setMozzarella] = useState('');
	const [cheddar, setCheddar] = useState('');
	const [gorgonzola, setGorgonzola] = useState('');
	const [pecorinoRomano, setPecorinoRomano] = useState('');

	// toppings
	const [tomato, setTomato] = useState('');
	const [sweetCorn, setSweetCorn] = useState('');
	const [bacon, setBacon] = useState('');
	const [mushroom, setMushroom] = useState('');
	const [onions, setOnions] = useState('');
	const [meat, setMeat] = useState('');
	const [spinach, setSpinach] = useState('');
	const [pepperoni, setPepperoni] = useState('');

	// status
	const [isLoading, setLoading] = useState(false);

	// functions
	const postData = async (e) => {
		if (
			!thinCrust ||
			!flatBreadCrust ||
			!neapolitan ||
			!classicHandTossed ||
			!cheeseBrust ||
			!pesto ||
			!hummus ||
			!marinara ||
			!whiteGarlic ||
			!garlicRanch ||
			!mozzarella ||
			!cheddar ||
			!gorgonzola ||
			!pecorinoRomano ||
			!tomato ||
			!sweetCorn ||
			!bacon ||
			!mushroom ||
			!onions ||
			!meat ||
			!spinach ||
			!pepperoni
		) {
			e.preventDefault();
		} else {
			setLoading(true);
			let data = {
				thinCrust: Number(thinCrust),
				flatBreadCrust: Number(flatBreadCrust),
				neapolitan: Number(neapolitan),
				classicHandTossed: Number(classicHandTossed),
				cheeseBrust: Number(cheeseBrust),
				pesto: Number(pesto),
				hummus: Number(hummus),
				marinara: Number(marinara),
				whiteGarlic: Number(whiteGarlic),
				garlicRanch: Number(garlicRanch),
				mozzarella: Number(mozzarella),
				cheddar: Number(cheddar),
				gorgonzola: Number(gorgonzola),
				pecorinoRomano: Number(pecorinoRomano),
				tomato: Number(tomato),
				sweetCorn: Number(sweetCorn),
				bacon: Number(bacon),
				mushroom: Number(mushroom),
				onions: Number(onions),
				meat: Number(meat),
				spinach: Number(spinach),
				pepperoni: Number(pepperoni),
			};

			let req = await fetch(`${BACKEND_ENDPOINT}/admin/fields`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('OvenStoryPizzaAdmin'),
				},
				body: JSON.stringify(data),
			});
			let res = await req.json();
			if ((res.message = 'fields inserted successfully')) {
				alert('Fields addes to inventory');
				window.location.href = `${FRONTEND_ENDPOINT}/admin/home`;
			}
		}
	};

	return (
		<div className='AdminAddItem container d-flex justify-content-center'>
			<div className='card add-item-card-width mt-5 '>
				<div className='card-body'>
					<h3 className='text-center'>Inventory</h3>
					<h5>Crust Type:</h5>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='thin-crust'>Thin Crust:</label>
							<input
								type='number'
								className='form-control'
								id='thin-crust'
								placeholder='QTY'
								value={thinCrust}
								onChange={(e) => setThinCrust(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='flat-bread'>Flatbread Crust:</label>
							<input
								type='number'
								className='form-control'
								id='flat-bread'
								placeholder='QTY'
								value={flatBreadCrust}
								onChange={(e) => setFlatBreadCrust(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='neapolitan'>Neapolitan:</label>
							<input
								type='number'
								className='form-control'
								id='neapolitan'
								placeholder='QTY'
								value={neapolitan}
								onChange={(e) => setNeapolitan(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='classic-hand-tossed'>Classic Hand Tossed:</label>
							<input
								type='number'
								className='form-control'
								id='Classic Hand Tossed'
								placeholder='QTY'
								value={classicHandTossed}
								onChange={(e) => setClassicHandTossed(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='cheese-brust'>Cheese Brust:</label>
							<input
								type='number'
								className='form-control'
								id='cheese-brust'
								placeholder='QTY'
								value={cheeseBrust}
								onChange={(e) => setCheeseBrust(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />
					<h5>Sauce Type:</h5>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='pesto'>Pesto:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='pesto'
								value={pesto}
								onChange={(e) => setPesto(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='hummus'>Hummus:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='hummus'
								value={hummus}
								onChange={(e) => setHummus(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='marinara'>Marinara Sauce:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='marinara'
								value={marinara}
								onChange={(e) => setMarinara(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='white-garlic'>White Garlic Sauce:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='white-garlic'
								value={whiteGarlic}
								onChange={(e) => setWhiteGarlic(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='galic-ranch'>Garlic Ranch Sauce:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='galic-ranch'
								value={garlicRanch}
								onChange={(e) => setGarlicRanch(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />
					<h5>Cheese Type:</h5>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='mozzarella'>Mozzarella:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='mozzarella'
								value={mozzarella}
								onChange={(e) => setMozzarella(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='cheddar'>Cheddar:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='cheddar'
								value={cheddar}
								onChange={(e) => setCheddar(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='gorgonzola'>Gorgonzola:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='gorgonzola'
								value={gorgonzola}
								onChange={(e) => setGorgonzola(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='pecorino-romano'>Pecorino-Romano:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='pecorino-romano'
								value={pecorinoRomano}
								onChange={(e) => setPecorinoRomano(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />

					<h5>Toppings</h5>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='tomato'>Tomato:</label>
							<input
								type='number'
								className='form-control'
								value={tomato}
								id='tomato'
								placeholder='QTY'
								onChange={(e) => setTomato(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='sweet-corn'>Sweet Corn:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='sweet-corn'
								value={sweetCorn}
								onChange={(e) => setSweetCorn(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='bacon'>Bacon:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='Bacon'
								value={bacon}
								onChange={(e) => setBacon(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='mushroom'>Mushrooms:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='sweet-corn'
								value={mushroom}
								onChange={(e) => setMushroom(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='onions'>Onions:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='onions'
								value={onions}
								onChange={(e) => setOnions(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='meat'>Meat:</label>
							<input
								type='number'
								placeholder='QTY'
								value={meat}
								onChange={(e) => setMeat(e.target.value)}
								className='form-control'
								id='meat'
								required
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<label htmlFor='spinach'>Spinach:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='spinach'
								value={spinach}
								onChange={(e) => setSpinach(e.target.value)}
								required
							/>
						</div>
						<div className='col-6'>
							<label htmlFor='pepperoni'>Pepperoni:</label>
							<input
								type='number'
								placeholder='QTY'
								className='form-control'
								id='pepperoni'
								value={pepperoni}
								onChange={(e) => setPepperoni(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />

					<button
						className='btn btn-primary'
						disabled={isLoading ? true : false}
						onClick={postData}
					>
						Add to Inventory
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminCustomFields;
