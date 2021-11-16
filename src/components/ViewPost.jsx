import React from 'react';
import { Link } from 'react-router-dom';

// THIS COMPONENT IS NOT USED IN ITS CURRENT VERSION

export default function ViewPost() {
	return (
		<div>
			<h1>Hi, this is the ViewPost page!</h1>
			<Link to='/'>login</Link>
		</div>
	);
}
