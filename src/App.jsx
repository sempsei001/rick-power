import React from 'react';

import Header from './components/header';
import CardContainer from './components/cardContainer';
import Search from './components/search';

// this is just an example
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
	<>
		<Search input="" />
		<header>
			<Header title="Welcome to Ricks deck!!!" />
		</header>
		<hr className="mt-6 mb-5 w-2/5 m-auto" />
		<main>
			<CardContainer characters={ricks} />
		</main>
	</>
);

export default App;