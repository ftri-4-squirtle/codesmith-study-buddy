import React from 'react';
import { Link } from 'react-router-dom';
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
			<p>
				{props.data.body.substring(0, 50).concat('... ')} <Link to='/viewpost'>more</Link>
			</p>
		</div>
	);
}
