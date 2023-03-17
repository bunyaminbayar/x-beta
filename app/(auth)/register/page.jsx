"use client"; // this is a client component 

import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';



function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // validations Message
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  // validations Rulles
  // email
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  // password
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPassError('');
    // validate control
    if (email.length < 1) {
      setEmailError('Please enter a email !');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address !');
      return;
    }
    // password
    if (passError.length <= 8) {
      setPassError('Password must be at least 8 characters!');
      return;
    } else if (!passwordRegex.test(password)) {
      setPassError('Password must be at least 8 characters, contain at least one special symbol, contain at least one uppercase letter, contain at least one number, and contain at least one lowercase letter.');
    }
    // form submit edildiğinde yapılacak işlemler
    const data = { email, password };
    console.log(data);

    /*
    const response = await fetch('/api/register', { // örnek apı key
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);  
    */
  };

  return (
    <>
      <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box maxWidth='100%' width={400}>
            <Typography color="#161616" sx={{ marginBottom: '40px' }} component="h1" variant="h5" fontWeight="medium" fontSize={24} lineHeight={'18px'}>
              Create your ProductX account
            </Typography>
            <Box display="flex" height="48px" justifyContent="center" alignItems="center" border={1} borderColor="#E3E3E3" borderRadius={'4px'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
              <Typography color="#525252" component="span" sx={{ marginLeft: '10px' }} fontSize={14} >
                Continue with Google
              </Typography>
            </Box>
            <Divider sx={{ margin: '25px 0 32px 0' }} />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Typography color="#525252" fontSize={'12px'} lineHeight={'12px'}>
                Email address
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder='Enter Your email address'
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              {emailError && <Typography>{emailError}</Typography>}
              <InputLabel>
                Password
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              {passError && <Typography>{passError}</Typography>}
              <Grid container display="flex" alignItems="center">
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default Register;
