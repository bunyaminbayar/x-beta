"use client"; // this is a client componentimport React from 'react';

import React, { useState } from 'react';
import { ButtonGroup, Button, TextField } from '@mui/material';

function Form() {
  const [iconText, setIconText] = useState(false);

  const iconAdnText = () => {
    if (iconText === true) {
      setIconText(false);
    }
  };

  const onlyIcon = () => {
    if (iconText === false) {
      setIconText(true);
    }
  };

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={iconAdnText}>One</Button>
        <Button onClick={onlyIcon}>Two</Button>
      </ButtonGroup>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        defaultValue={iconText ? 'Disabled' : ''}
        disabled={iconText}
      />
      <TextField
        id="outlined-basic2"
        label="Outlined"
        variant="outlined"
        defaultValue={iconText ? 'Disabled' : ''}
        disabled={iconText}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        defaultValue="Disabled"
        disabled
      />
    </div>
  );
}
export default Form;