"use client"; // this is a client componentimport React from 'react';


import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import InputEmoji from 'react-input-emoji';

function MyForm() {
  const [text, setText] = useState('');

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleEmojiChange(emoji) {
    setText(emoji);
  }

  function handleTextFieldClick() {
    // Trigger emoji picker when TextField is clicked
    document.getElementById('emoji-picker').click();
  }

  return (
    <div>
      <TextField
        label="Enter text"
        value={text}
        onChange={handleInputChange}
        onClick={handleTextFieldClick}
      />
      <InputEmoji id="emoji-picker" onChange={handleEmojiChange} />
    </div>
  );
}

export default MyForm;
