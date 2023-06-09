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
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CreateWorkplace() {

  // MUI Meida query rulles
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // States . //// Workspace Name input
  const [workName, setWorkName] = useState('');
  const [workNameError, setWorkNameError] = useState('');
  const [workNameReady, setWorkNameReady] = useState(false);
  // web URL input
  const [webURL, setWebURL] = useState('');
  const [webURLError, setWebURLError] = useState('');
  const [webURLReady, setWebURLReady] = useState(false);
  // Large Company select option. 
  const [companyLarge, setCompanyLarge] = useState('1-10employees');
  // What is your role select option.
  const [yourRole, setYourRole] = useState('marketing-manager');

  // control web site validation and regex input
  const handlechangeWebURL = (event) => {
    const inputValue = event.target.value;
    if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(inputValue)) {
      setWebURL(inputValue);
      setWebURLError('');
      setWebURLReady(true);
    } else {
      setWebURLError('Please enter the URL of the webpage where you would like to display widgets on your website.');
      setWebURLReady(false);
    }
  };

  // control workspace name input validation
  const handlechangeWorkName = (event) => {
    if (event.target.value.length < 1) {
      setWorkName(event.target.value);
      setWorkNameError('Please enter your Workspace Name');
      setWorkNameReady(false);
    } else {
      setWorkNameError('');
      setWorkNameReady(true);
    }
  };

  // submit form
  const submitForm = (e) => {
    e.preventDefault();

    // control form validation
    if (workNameReady === true && webURLReady === true) {
    } if (workNameReady === false) {
      setWorkNameError('Please enter your Workspace Name');
    } if (webURLReady === false) {
      setWebURLError('Please enter the URL of the webpage where you would like to display widgets on your website.');
    } 
    // success form
    console.log(workName, webURL, companyLarge, yourRole, "success");
  };

  /**
   * !! When the real data is processed, it is necessary to set these values in the form of label and value.
   */
  // employees large select options
  const employeesLarge = [
    {
      value: '1-10employees',
      label: '1 - 10 employees',
    },
    {
      value: '10-50employees',
      label: '10 - 50 employees',
    },
    {
      value: '50-100employees',
      label: '50 - 100 employees',
    }
  ];

  //  your large select option
  const yourRolesArray = [
    {
      value: 'marketing-manager',
      label: 'Marketing Manager',
    },
    {
      value: 'it-specialist',
      label: 'IT Specialist',
    },
    {
      value: 'team leader',
      label: 'Team Leader',
    }
  ];

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
            <Typography color="#161616" sx={{ mb: 3, mt: 2 }} component="h1" variant="h5" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
              Create a workspace
            </Typography>
            <Typography color="#161616" fontSize='14px' lineHeight='23px' paddingRight={isSmallScreen ? '0px' : '30px'}>
              Welcome to ProductX. Let’s start with creating your first workspace!
            </Typography>
            <Box className='createWorkspaceForm' component="form" onSubmit={submitForm} noValidate>
              <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mt: 4, mb: 1 }}>
                Workspace Name
              </Typography>
              <TextField
                onChange={handlechangeWorkName}
                error={!!workNameError}
                helperText={workNameError}
                fullWidth
                id="filled-basic"
                variant="filled"
                placeholder='ACME LTD'
              />
              <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mt: 4, mb: 1 }}>
                Enter your website URL
              </Typography>
              <TextField
                onChange={handlechangeWebURL}
                inputProps={{ pattern: '/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i*' }}
                error={!!webURLError}
                helperText={webURLError}
                fullWidth
                id="filled-basic"
                variant="filled"
                placeholder='e.g. https://productx.com'
              />
              <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mt: 4, mb: 1 }}>
                How large is your company?
              </Typography>
              <TextField
                id="filled-select-currency"
                select
                fullWidth
                defaultValue="1-10employees"
                variant="filled"
                onChange={(event) => setCompanyLarge(event.target.value)}
                SelectProps={{
                  IconComponent: ExpandMoreIcon,
                }}
              >
                {employeesLarge.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mt: 4, mb: 1 }}>
                What is your role?
              </Typography>
              <TextField
                id="filled-select-currency"
                select
                fullWidth
                defaultValue="marketing-manager"
                variant="filled"
                onChange={(event) => setYourRole(event.target.value)}
                SelectProps={{
                  IconComponent: ExpandMoreIcon,
                }}
              >
                {yourRolesArray.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Grid container display="flex" alignItems="center">
                <Grid item xs>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fontWeight="medium"
                    sx={{ fontSize: '14px', lineHeight: '16px', mt: 3, mb: 2, pt: 2, pr: 8, pb: 2, pl: 2, borderRadius: 0, textTransform: 'inherit', background: '#0F62FE' }}
                  >
                    Create workspace
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

export default CreateWorkplace;
