import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.css';

const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export default function Login() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className={styles.mainContainer}>
			<section className={styles.loginContainer}>
				<form onSubmit={formik.handleSubmit} className={styles.form}>
					<div>
						<TextField
							fullWidth
							id='email'
							name='email'
							label='Email'
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
							className={styles.textfield}
						/>
						<TextField
							fullWidth
							id='password'
							name='password'
							label='Password'
							type='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
							className={styles.textfield}
						/>
						<Button color='primary' variant='contained' fullWidth type='submit' className={styles.button}>
							Login
						</Button>
					</div>
					<div>
						<a href='/googleauth' className={styles.links}>
							<Button color='secondary' variant='contained' fullWidth type='button' className={styles.button}>
								Sign in using Google
							</Button>
						</a>
						<Button color='secondary' variant='contained' fullWidth type='button' className={styles.button} disabled>
							Sign in using Github
						</Button>
					</div>
				</form>
			</section>
		</div>
	);
}
