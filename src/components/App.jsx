import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<h1>Hi Team Squirtle!</h1>
				<Routes>
					<Route path='/' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
