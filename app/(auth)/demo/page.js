"use client"; // this is a client componentimport React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  code: {
    whiteSpace: 'pre-line',
    lineHeight: 1.5,
    counterReset: 'linenumber',
  },
  line: {
    counterIncrement: 'linenumber',
    '&:before': {
      content: 'counter(linenumber)',
      marginRight: '10px',
      color: '#999',
      display: 'inline-block',
      textAlign: 'right',
      width: '40px',
    },
  },
}));

export default function CodeBlock() {
  const classes = useStyles();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // Output: 3
    `);
  };

  return (
    <>
      <Typography variant="body1" component="pre" className={classes.code}>
        <div className={classes.line}>function sum(a, b) {'{'} </div>
        <div className={classes.line}>  return a + b;</div>
        <div className={classes.line}>{'}'}</div>
        <div className={classes.line}>console.log(sum(1, 2)); // Output: 3</div>
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCopyClick}>
        Copy Code
      </Button>
    </>
  );
}
