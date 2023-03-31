"use client"; // this is a client component 

import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MenuAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   // MUI Meida query rulles
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ background: '#161616' }}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="p" fontSize="14px"  component="div" sx={{ flexGrow: 1 }}>
        Product
          <Typography variant="span" sx={{ ml: 1 }} fontSize="14px"  fontWeight="600">
          [X] 
        </Typography>
        </Typography>
          <div>
            <Button
              sx={{ cursor: 'pointer', textTransform: 'none', fontSize: '14px', lineHeight: '18px' }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {isSmallScreen ? "john@doe.com" : "Logged in as: john@doe.com"}
              
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{ marginTop: '25px', padding: '11px 0 14px 17px' }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem fontSize="14px" sx={{ marginTop: '3px !important', paddingLeft: '17px !important', display: 'block !important', minWidth: '185px', textAlign: 'left', lineHeight: '14px' }} onClick={handleClose}>Installation</MenuItem>
              <MenuItem fontSize="14px" sx={{ paddingLeft: '17px !important', display: 'block !important', minWidth: '185px', textAlign: 'left', lineHeight: '14px' }} onClick={handleClose}>Account</MenuItem>
              <MenuItem fontSize="14px" sx={{ paddingLeft: '17px !important', marginBottom: '6px !important', display: 'block !important', minWidth: '185px', textAlign: 'left', lineHeight: '14px' }} onClick={handleClose}>Logout</MenuItem>

            </Menu>
          </div>
      </Toolbar>
    </AppBar>
  );
}