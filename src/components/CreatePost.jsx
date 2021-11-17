import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from './CreatePost.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const topics = ['Algorithms', 'System Design', 'Behavioral', 'JavaScript', 'React'];
const difficulties = ['Easy', 'Medium', 'Hard'];

export default function CreatePost() {
	const [topicState, setTopicState] = useState([]);
	const [difficultyState, setDifficultyState] = useState('');

	const handleTopicChange = (event) => {
		const {
			target: { value },
		} = event;
		setTopicState(
			// On autofill we get a the stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	const handleDifficultyChange = (event) => {
		const {
			target: { value },
		} = event;
		setDifficultyState(
			// On autofill we get a the stringified value.
			// typeof value === 'string' ? value.split(',') : value
			value
		);
	};

	const formik = useFormik({
		initialValues: {
			title: '',
			company: '',
			content: '',
		},
		validationSchema: Yup.object({
			title: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
			company: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
			content: Yup.string().min(10, 'Must be 10 characters or more').required('Required'),
		}),
		onSubmit: (values, actions) => {
			fetch('/api/posts', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({ topic: topicState, difficulty: difficultyState, company: formik.values.company, content: formik.values.content, title: formik.values.title }),
			})
				// .then((res) => res.json())
				.then((data) => {
					if (data.status === 200) {
						setTopicState([]);
						setDifficultyState('');
						actions.resetForm();
						alert('Successfully Submitted!');
					}
				})
				.catch((err) => console.log('POST REQUEST ERROR: ', err));
		},
	});

	return (
		<div>
			<h1>Submit your Interview Question</h1>
			<form onSubmit={formik.handleSubmit}>
				{/* <label htmlFor='title'>Title</label>
				<input id='title' name='title' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} />
				{formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null} */}
				<TextField
					fullWidth
					id='title'
					name='title'
					label='Title'
					value={formik.values.title}
					onChange={formik.handleChange}
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
					variant='outlined'
					margin='normal'
				/>

				{/* <label htmlFor='category'>Category</label>
				<input id='category' name='category' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category} />
				{formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null} */}

				{/* <TextField
					fullWidth
					id='category'
					name='category'
					label='Category'
					value={formik.values.category}
					onChange={formik.handleChange}
					error={formik.touched.category && Boolean(formik.errors.category)}
					helperText={formik.touched.category && formik.errors.category}
				/> */}

				<div>
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id='demo-multiple-checkbox-label'>Topics</InputLabel>
						<Select
							labelId='multiple-checkbox-label'
							id='multiple-checkbox'
							multiple
							fullWidth
							value={topicState}
							onChange={handleTopicChange}
							input={<OutlinedInput label='topic' />}
							renderValue={(selected) => selected.join(', ')}
							MenuProps={MenuProps}
						>
							{topics.map((name) => (
								<MenuItem key={name} value={name}>
									<Checkbox checked={topicState.indexOf(name) > -1} />
									<ListItemText primary={name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				{/* <label htmlFor='company'>Company</label>
				<input id='company' name='company' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} />
				{formik.touched.company && formik.errors.company ? <div>{formik.errors.company}</div> : null} */}
				<TextField
					fullWidth
					id='company'
					name='company'
					label='Company'
					value={formik.values.company}
					onChange={formik.handleChange}
					error={formik.touched.company && Boolean(formik.errors.company)}
					helperText={formik.touched.company && formik.errors.company}
					variant='outlined'
					margin='normal'
				/>

				<div>
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id='demo-multiple-checkbox-label'>Difficulty Level</InputLabel>
						<Select
							labelId='single-checkbox-label'
							id='single-checkbox'
							fullWidth
							value={difficultyState}
							onChange={handleDifficultyChange}
							input={<OutlinedInput label='difficulty' />}
							renderValue={(selected) => selected}
							MenuProps={MenuProps}
						>
							{difficulties.map((name) => (
								<MenuItem key={name} value={name}>
									<Checkbox checked={difficultyState.indexOf(name) > -1} />
									<ListItemText primary={name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				{/* <label htmlFor='body'>Body</label>
				<input id='body' name='body' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.body} />
				{formik.touched.body && formik.errors.body ? <div>{formik.errors.body}</div> : null} */}
				<TextField
					fullWidth
					id='content'
					name='content'
					label='Content'
					multiline
					rows={4}
					value={formik.values.content}
					onChange={formik.handleChange}
					error={formik.touched.content && Boolean(formik.errors.content)}
					helperText={formik.touched.content && formik.errors.content}
					variant='outlined'
					margin='normal'
				/>

				<Button color='primary' variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</div>
	);
}
