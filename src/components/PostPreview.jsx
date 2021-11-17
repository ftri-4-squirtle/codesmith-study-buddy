import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PostPreview.module.css';

export default function PostPreview(props) {
	const [preview, setPreview] = useState(true);

	return (
		<div className={styles.mainContainer}>
			<p className={styles.firstLine}>
				<span>{props.data.title}</span>
				<span>{props.data.topic_id}</span>
				<span>{props.data.company_id}</span>
			</p>
			<p className={styles.firstLine}>
				<span>{preview ? props.data.content.substring(0, 50).concat('... ') : props.data.content}</span>
				<span>
					<Button
						color='primary'
						variant='contained'
						type='button'
						onClick={() => {
							setPreview(!preview);
						}}
					>
						{preview ? 'MORE' : 'LESS'}
					</Button>
				</span>
			</p>
		</div>
	);
}
