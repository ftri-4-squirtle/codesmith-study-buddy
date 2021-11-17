import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function CreatePost() {
	const formik = useFormik({
		initialValues: {
			title: '',
			category: '',
			company: '',
			body: '',
		},
		validationSchema: Yup.object({
			title: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
			category: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
			company: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
			body: Yup.string().min(10, 'Must be 10 characters or more').required('Required'),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
			<h1>Hi, this is the CreatePost page!</h1>
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
				/>

				{/* <label htmlFor='category'>Category</label>
				<input id='category' name='category' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category} />
				{formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null} */}
				<TextField
					fullWidth
					id='category'
					name='category'
					label='Category'
					value={formik.values.category}
					onChange={formik.handleChange}
					error={formik.touched.category && Boolean(formik.errors.category)}
					helperText={formik.touched.category && formik.errors.category}
				/>

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
				/>

				{/* <label htmlFor='body'>Body</label>
				<input id='body' name='body' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.body} />
				{formik.touched.body && formik.errors.body ? <div>{formik.errors.body}</div> : null} */}
				<TextField fullWidth id='body' name='body' label='Body' value={formik.values.body} onChange={formik.handleChange} error={formik.touched.body && Boolean(formik.errors.body)} helperText={formik.touched.body && formik.errors.body} />

				<Button color='primary' variant='contained' type='button'>
					Submit
				</Button>
			</form>
			<Link to='/'>login</Link>
		</div>
	);
}
