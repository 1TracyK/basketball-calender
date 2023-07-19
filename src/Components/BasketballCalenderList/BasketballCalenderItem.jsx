import React from 'react';

export default function BasketballCalenderItem({
	location,
	team1,
	team2,
	date,
}) {
	return (
		<tr>
			<td>{date}</td>
			<td>{location}</td>
			<td>{team1}</td>
			<td>{team2}</td>
			<td>-</td>
		</tr>
	);
}
