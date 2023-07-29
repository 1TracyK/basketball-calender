import './App.css';
import React, { useState } from 'react';
import BasketballCalenderForm from './Components/BasketballCalenderForm/BasketballCalenderForm';
import BasketballCalenderList from './Components/BasketballCalenderList/BasketballCalenderList';

function App() {
	const [items, setItems] = useState([
		{
			id: 1689374598465,
			location: 'Los Angelos',
			team1: 'Lakers',
			team2: 'Pistons',
			date: '2023-08-11',
			winner: 'Lakers',
		},
		{
			id: 1689374598466,
			location: 'Detroit',
			team1: 'Pistons',
			team2: 'Lakers',
			date: '2023-10-12',
			winner: null,
		},
	]);

	// eslint-disable-next-line no-unused-vars
	function createItem(date, location, home, guest) {
		setItems((oldItems) => {
			let newItems = [
				...oldItems,
				{
					id: new Date().getTime(),
					location,
					team1: home,
					team2: guest,
					date,
					winner: null,
				},
			];
			newItems.sort((match1, match2) => (match1.date > match2.date ? 1 : -1));
			return newItems;
		});
	}
	// eslint-disable-next-line no-unused-vars
	function updateWinner(id, newWinnerValue) {
		let result = [];
		let newItems = structuredClone(items); //deep cone
		for (let item of newItems) {
			if (item.id === id) {
				item.winner = newWinnerValue;
			}
			result.push(item);
		}
		setItems(result);
	}

	function deleteItem(id) {
		let result = []; //shallow clonealready  (bcuz w dont dig into the object field)
		for (let item of items) {
			if (item.id !== id) {
				result.push(item);
			}
		}
		setItems(result);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Basketball Calender</h1>
			</header>
			<BasketballCalenderForm createItem={createItem} />
			<BasketballCalenderList
				items={items}
				updateWinner={updateWinner}
				deleteItem={deleteItem}
			/>
		</div>
	);

	// return undefined;
}

export default App;
