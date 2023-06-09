"use client"; // this is a client component 

import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Register() {

  // MUI Meida query rulles
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Show or hide password with TextField icons
  const [showPassword, setShowPassword] = useState(false);

  // for show password
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // for hide password
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // states. Email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailReady, setEmailReady] = useState(false);
  const [passwordReady, setPasswordReady] = useState(false);

  // email should be inslude @ and "." dot
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // password should be include; one sembol, one number, one capital letter and lower letter
  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  }

  // email handle function
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Please enter a valid email !");
    } else {
      setEmailError("");
      setEmailReady(true);
    }
  }

  // password handle function
  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Password must be at least 8 characters, contain at least one special symbol, contain at least one uppercase letter, contain at least one number, and contain at least one lowercase letter !"
      );
    } else {
      setPasswordError("");
      setPasswordReady(true);
    }
  }

  // form submit function
  function handleSubmit(event) {
    event.preventDefault();

    if (emailReady === true && passwordReady === true) {
      // Form submissions can be done here
      const data = { email, password };
      console.log(data);
    }

  }

  return (
    <>
      <Box display="flex" sx={{ minHeight: 'calc(100vh - 70px)' }} justifyContent="center" alignItems="center">
        <Box padding={isSmallScreen ? '20px' : '0px'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box width={'100%'} maxWidth='400px'>
          <Typography color="#161616" sx={{ mb: '40px', mt: 2 }} component="h1" variant="h5" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
              Register
            </Typography>
            <Box display="flex" height="48px" justifyContent="center" alignItems="center" border={1} borderColor="#E3E3E3" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
              <Typography color="#525252" component="span" sx={{ marginLeft: '10px' }} fontSize={14} >
                Continue with Google
              </Typography>
            </Box>
            <Divider sx={{ margin: '25px 0 32px 0' }} />
            <Box className='registerForm' noValidate sx={{ mt: 1 }}>
              <Typography color="#525252" fontSize="12px" lineHeight="12px">
                Email address
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                placeholder='Enter Your email address'
                name="email"
                margin="dense"
                fontSize="14px"
                size="small"
                color="#525252"
                variant="filled"
                onChange={handleEmailChange}
                autoFocus
                autoComplete="off"
              />
              {emailError && <Typography color="#eb2f06" fontSize="12px" lineHeight="12px" sx={{ margin: '0 0 10px 0' }}>{emailError}</Typography>}
              <Typography mt="32px" color="#525252" fontSize="12px" lineHeight="12px">
                Password
              </Typography>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                id="password"
                margin="dense"
                size="small"
                fontSize="14px"
                color="#525252"
                variant="filled"
                onChange={handlePasswordChange}
                autoComplete="off"
              />
              {passwordError && <Typography color="#eb2f06" fontSize="12px" lineHeight="12px" sx={{ margin: '0 0 10px 0' }}>{passwordError}</Typography>}
              <Grid container display="flex" alignItems="center">
                <Grid item xs>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fontWeight="medium"
                    style={{ fontSize: '14px', lineHeight: '16px', paddingTop: '16px', paddingRight: '64px', paddingBottom: '16px', paddingLeft: '16px', marginTop: '16px', marginBottom: '16px', color: '#fff', borderRadius: 0, textTransform: 'inherit', background: '#0F62FE' }}
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item>
                  <Link href="login" sx={{ textDecoration: 'auto' }} fontSize="14px" variant="body2">
                    Already Registered? Log in
                  </Link>
                </Grid>
              </Grid>
              <Typography color="#525252" textAlign="center" fontSize="13px" lineHeight="19px" sx={{ margin: '0 0 10px 0' }}>
                By signing up, you agree to the <Link color="#525252" sx={{ textDecoration: 'auto' }} fontWeight={600}>Terms of Service</Link> and <Link color="#525252" sx={{ textDecoration: 'auto' }} fontWeight={600} >Data Processing Agreement</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Register;
