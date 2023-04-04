"use client"; // this is a client componentimport React from 'react';

import React, { useState } from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === '1234') {
      setError('dogru');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2">
        Login
      </Typography>
      <TextField
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
}
