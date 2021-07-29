import React from 'react';
import PropTypes from 'prop-types';

import '../styles/fonts.css';

const Header = ({ title }) => (
	<h1 className="text-6xl pt-40 font-bold	text-center text-gray-800 comic-neue">{ title }</h1>
);

Header.propTypes = ({
	title: PropTypes.string,
});

export default Header;
