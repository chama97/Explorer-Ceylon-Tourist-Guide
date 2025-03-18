import React, { useState } from 'react';
import styles from './Login.module.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import AuthService from '../../services/AuthService';
import Loginlogo from '../../assets/login.jpg';
import Navbar from '../../components/navbar/Nav';
import Footerr from '../../components/footer/Footer';

const Login = () => {

  // const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password
    };
    try {
      const resp = await AuthService.postLogin(data);

      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.data);
        console.log('Login successful', resp.data.data);
      } else {
        // setShowErrorAlert(true);
        // setErrorMessage(resp.response.data.message);
        console.log('Login failed');
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
      <div className={styles.loginContainer}>
        <div className={styles.imageSide}>
          <img src={Loginlogo} alt='' />
        </div>
        <div className={styles.formSide} >
          <div className={styles.loginBox}>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '32px', color: 'blue', fontWeight: 'bold' }}>LOGIN</span>
            </div>
            <div className={styles.loginBoxBody}>
              <ValidatorForm className={styles.form} onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={3}>
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
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={styles.button}
                      fullWidth
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid style={{ textAlign: 'center' }} item>
                    <Link to="/signup">Don't have an account? Sign up</Link>
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

export default Login