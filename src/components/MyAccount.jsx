import React from 'react';
import { Link } from 'react-router-dom';

export default function MyAccount() {
	return (
		<div>
			<h1>Hi, this is the MyAccount page!</h1>
			<Link to='/'>login</Link>
		</div>
	);
}
