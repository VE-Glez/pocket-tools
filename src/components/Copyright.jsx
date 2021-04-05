import { Link, Typography } from '@material-ui/core';
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" component={LinkRouter} to="/about">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
