import React from 'react';
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
	return (
		<div>
			<BrowserRouter>
				<Navbar />
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
