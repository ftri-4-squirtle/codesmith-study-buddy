import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<div>
			<h1>Hi, this is the Login page!</h1>
			<Link to='/home'>home</Link>
		</div>
	);
}
