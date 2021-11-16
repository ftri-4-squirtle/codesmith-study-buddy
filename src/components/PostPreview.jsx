import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PostPreview.module.css';

export default function PostPreview(props) {
	console.log(props);
	return (
		<div className={styles.mainContainer}>
			<p className={styles.firstLine}>
				<span>{props.data.title}</span>
				<span>{props.data.category}</span>
				<span>{props.data.company}</span>
			</p>
			<p className={styles.firstLine}>
				<span>{props.data.body.substring(0, 50).concat('... ')}</span>
				<span>
					<Button color='primary' variant='contained' type='button'>
						More
					</Button>
				</span>
			</p>
		</div>
	);
}
