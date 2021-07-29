import React from 'react';

import Card from './components/card';

const ricks = [
	{
		id: 1,
		name: 'RickRick Sanchez',
		gender: 'Male',
		status: 'Alive',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
	},
	{
		id: 8,
		name: 'Adjudicator Rick',
		gender: 'Male',
		status: 'Dead',
		image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg'
	},
	{
		id: 15,
		name: 'Alien Rick',
		gender: 'Male',
		status: 'unknown',
		image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg'
	},
	{
		id: 19,
		name: 'Antenna Rick',
		gender: 'Male',
		status: 'unknown',
		image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
	},
	{
		id: 48,
		name: 'Black Rick',
		gender: 'Male',
		status: 'Alive',
		image: 'https://rickandmortyapi.com/api/character/avatar/48.jpeg'
	},
]

const App = () => (
	<div className="flex flex-col flex-nowrap items-center mt-2 lg:flex-row lg:flex-wrap">
		{
			ricks.map(({id, name, gender, status, image}) => (
				<Card
					key={id}
					name={name}
					gender={gender}
					status={status}
					image={image}
				/>
			))
		}
	</div>
);

export default App;