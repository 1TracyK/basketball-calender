import './App.css';
import React, { useState } from 'react';
import BasketballCalenderForm from './Components/BasketBallCalenderForm/BasketballCalenderForm';
import BasketballCalenderList from './Components/BasketballCalenderList/BasketballCalenderList';

function App() {
	const [items, setItems] = useState([
		{
			createdAt: 1689374598465,
			location: 'Los Angelos',
			team1: 'Lakers',
			team2: 'Pistons',
		},
		{
			createdAt: 1689374598466,
			location: 'Detroit',
			team1: 'Pistons',
			team2: 'Lakers',
		},
	]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Basketball Calender</h1>
			</header>
			<BasketballCalenderForm />
			<BasketballCalenderList />
		</div>
	);
}

export default App;
