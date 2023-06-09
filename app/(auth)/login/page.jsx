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
import Alert_app from '@/app/components/alert';

function Login() {

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
  const [errorMsg, setErrorMsg] = useState("");
  // Form save Status  
  const [formsStatus, setFormsStatus] = useState('default');

  // email handle function
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  // password handle function
  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

  // form submit function
  function handleSubmit(event) {
    event.preventDefault();

    if (email === 'admin' && password === '1234') {
      setErrorMsg("");
      const data = { email, password };
      console.log(data);
      setFormsStatus("success");
    } else {
      setErrorMsg('Invalid username or password !');
    }
  }

  return (
    <>
      {/** Alert area */}
      {formsStatus === 'success' ?
        <Alert_app alertMsg="Successfully Logged in" formsStatus={formsStatus} />
        :
        null
      }
      <Box display="flex" sx={{ minHeight: 'calc(100vh - 70px)' }} justifyContent="center" alignItems="center">
        <Box width={'100%'} padding={isSmallScreen ? '20px' : '0px'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box minWidth={isSmallScreen ? '0px' : '400px'} width={'100%'} maxWidth='400px'>
            <Typography color="#161616" sx={{ mb: '40px', mt: 2 }} component="h1" variant="h5" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
              Login
            </Typography>
            <Box display="flex" height="48px" justifyContent="center" alignItems="center" border={1} borderColor="#E3E3E3" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="21px" height="21px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
              <Typography color="#525252" component="span" sx={{ marginLeft: '10px' }} fontSize={14} >
                Sign in with Google
              </Typography>
            </Box>
            <Divider sx={{ margin: '25px 0 32px 0' }} />
            {errorMsg && <Typography color="#eb2f06" fontSize="14px" lineHeight="16px" sx={{ margin: '0 0 24px 0' }}>{errorMsg}</Typography>}
            <Box className='loginForm' component="form" noValidate sx={{ mt: 1 }}>
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
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Link href="register" sx={{ textDecoration: 'auto' }} fontSize="14px" variant="body2">
                    Register Now
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

export default Login;
