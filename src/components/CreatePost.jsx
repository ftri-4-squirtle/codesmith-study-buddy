import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
			<Link to='/'>login</Link>
		</div>
	);
}
