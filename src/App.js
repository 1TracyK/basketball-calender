import './App.css';
import React, { useState } from 'react';
import BasketballCalenderForm from './Components/BasketballCalenderForm/BasketballCalenderForm';
import BasketballCalenderList from './Components/BasketballCalenderList/BasketballCalenderList';

function App() {
	// eslint-disable-next-line no-unused-vars
	const [items, setItems] = useState([
		{
			createdAt: 1689374598465,
			location: 'Los Angelos',
			team1: 'Lakers',
			team2: 'Pistons',
			date: '2023-08-11',
		},
		{
			createdAt: 1689374598466,
			location: 'Detroit',
			team1: 'Pistons',
			team2: 'Lakers',
			date: '2023-10-12',
		},
	]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Basketball Calender</h1>
			</header>
			<BasketballCalenderForm />
			<BasketballCalenderList items={items} />
		</div>
	);
}

export default App;
