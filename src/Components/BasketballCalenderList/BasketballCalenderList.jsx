import React from 'react';
import BasketballCalenderItem from './BasketballCalenderItem';
import './BasketballCalenderList.css';
export default function BasketballCalenderList({ items }) {
	// eslint-disable-next-line no-unused-vars
	let ItemListJsx = items.map((item) => (
		<BasketballCalenderItem
			key={item.createdAt}
			location={item.location}
			team1={item.team1}
			team2={item.team2}
			date={item.date}
		/>
	));
	return (
		<div className="calender-table-container">
			<table className="calender-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Location</th>
						<th>Home</th>
						<th>Guest</th>
						<th>Winner</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{ItemListJsx}</tbody>
			</table>
		</div>
	);
}
