import React, { useState } from 'react';
import styles from './Signup.module.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import AuthService from '../../services/AuthService';
import Loginlogo from '../../assets/signup.png';
import Navbar from '../../components/navbar/Nav';
import Footerr from '../../components/footer/Footer';

const Signup = () => {

  // const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // const [successMessage, setSuccessMessage] = useState('');


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };


  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      address: address
    };
    try {
      const resp = await AuthService.postSign(data);

      if (resp.status === 201) {
        // setShowSuccessAlert(true);
        // setSuccessMessage('User registered successfully');
        console.log('Sign successful', resp.data.data);
      } else {
        // setShowErrorAlert(true);
        // setErrorMessage('User registered Unsuccessfully');
        console.log('Sign failed');
        console.log('resp :', resp);
      }

    } catch (error) {
      console.error('Error occurred :', error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.signContainer}>
        <div className={styles.imageSide}>
          <img src={Loginlogo} alt='' />
        </div>
        <div className={styles.formSide} >
          <div className={styles.signBox}>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '32px', color: 'blue', fontWeight: 'bold' }}>SIGN-UP</span>
            </div>
            <div className={styles.signBoxBody}>
              <ValidatorForm className={styles.form} onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <TextValidator
                      label="Name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      validators={['required', 'isString']}
                      errorMessages={['Name is required', 'Invalid name']}
                      className='input'
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextValidator
                      label="Email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      validators={['required', 'isString']}
                      errorMessages={['Email is required', 'Invalid email']}
                      className='input'
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextValidator
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      validators={['required']}
                      errorMessages={['Password is required']}
                      className='input'
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextValidator
                      label="Address"
                      type="Address"
                      value={address}
                      onChange={handleAddressChange}
                      validators={['required']}
                      errorMessages={['Address is required']}
                      className='input'
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={styles.button}
                      fullWidth
                    >
                      Sign-up
                    </Button>
                  </Grid>
                  <Grid style={{ textAlign: 'center' }} item>
                    <Link to="/signin">Already have an account? Login</Link>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footerr />
      </div>
    </>
  )
}
export default Signup