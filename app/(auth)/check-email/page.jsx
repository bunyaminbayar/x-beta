"use client"; // this is a client component 

import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function CheckEmail() {

  // MUI Meida query rulles
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [formReady, setFormReady] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d{6}$/.test(inputValue)) {
      setValue(inputValue);
      setError('');
      setFormReady(true);
    } else {
      setError('Please enter a 6-digit number');
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (formReady === true) {
      console.log(value);
    } else {
      setError('Please enter a code');
    }
  };

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
            <Typography color="#161616" sx={{ marginBottom: '24px' }} component="h1" variant="h5" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
              Check your email
            </Typography>
            <Typography color="#161616" fontSize='14px' lineHeight='23px' paddingRight={isSmallScreen ? '0px' : '30px'}>
              We’ve sent a temporary login link. Please check your inbox at <strong fontWeight='500'>john@doe.com</strong>
            </Typography>
            <Box component="form" onSubmit={submitForm} >
              <TextField
               onChange={handleInputChange}
               inputProps={{ pattern: '[0-9]*', maxLength: 6 }}
               error={!!error}
               helperText={error}
                fullWidth
                sx={{ mt: 4, mb: 2 }}
                id="filled-basic"
                label="Enter Code"
                variant="filled"
              />
              <Grid container display="flex" alignItems="center">
                <Grid item xs>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fontWeight="medium"
                    sx={{ fontSize: '14px', lineHeight: '16px', pt: 2, pr: 8, pb: 2, pl: 2, borderRadius: 0, textTransform: 'inherit', background: '#0F62FE' }}
                  >
                    Verify account
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CheckEmail;
