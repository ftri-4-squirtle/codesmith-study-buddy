import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './MyAccount.module.css';


export default function MyAccount() {
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
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
        </div>
      </div>

      <div className={styles.accountButtons}>
        <Button className={styles.button} color='primary' variant='contained'  type='submit'>EDIT</Button>

        <Button className={styles.button} color='secondary' variant='contained' type='button'>DELETE</Button>
      </div>

    </div>
  );
}

