import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const CardContainer = ({ characters }) => (
	<div className="mb-5 p-2 border-gray-900 border-2 w-max m-auto rounded-md flex flex-col flex-nowrap items-center md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-1 md:gap-4 lg:p-1 lg:grid-rows-2">
		{
			characters.map(({id, name, gender, status, image}) => (
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

CardContainer.propTypes = ({ characters: PropTypes.array });

export default CardContainer;
