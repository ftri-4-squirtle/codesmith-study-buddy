import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import styles from './App.module.css';

import Login from './Login.jsx';
import Home from './Home.jsx';
import ViewPost from './ViewPost.jsx';
import CreatePost from './CreatePost.jsx';
import MyAccount from './MyAccount.jsx';
import Navbar from './Navbar.jsx';

export default function App() {
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		if (window.location.pathname !== '/') setShowNavbar(true);
	}, []);

	return (
		<div className={styles.App}>
			<BrowserRouter>
				{showNavbar && <Navbar />}
				<Container className={styles.container}>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='home' element={<Home />} />
						<Route path='viewpost' element={<ViewPost />} />
						<Route path='createpost' element={<CreatePost />} />
						<Route path='myaccount' element={<MyAccount />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	);
}
