import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<h1>Hi, this is the Home page!</h1>
			<p>
				<Link to='/'>login</Link>
			</p>
			<p>
				<Link to='/viewpost'>viewpost</Link>
			</p>
			<p>
				<Link to='/createpost'>createpost</Link>
			</p>
			<p>
				<Link to='/myaccount'>myaccount</Link>
			</p>
		</div>
	);
}
