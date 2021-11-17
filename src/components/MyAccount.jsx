import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './MyAccount.module.css';

export default function MyAccount() {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch('/getUserInfo')
			.then((res) => res.json())
			.then((result) => {
				setUser(result);
			});
	}, []);

	return (
		<div className={styles.mainContainer}>
			<h1>My Account</h1>

			<div className={styles.account}>
				<div className={styles.accountLabels}>
					<p>Username: </p>
					<p>Email: </p>
					<p>Cohort:</p>
					<p>Status: </p>
					<p>Employer: </p>
				</div>

				<div className={styles.accountInfo}>
					<p>{user.displayName}</p>
					<p>{user.email}</p>
					<p>FTRI 4</p>
					<p>Unemployed</p>
					<p>N/A</p>
				</div>
			</div>

			<div className={styles.accountButtons}>
				<Button className={styles.button} color='primary' variant='contained' type='submit' disabled>
					EDIT
				</Button>

				<Button className={styles.button} color='secondary' variant='contained' type='button' disabled>
					DELETE
				</Button>
			</div>
		</div>
	);
}
