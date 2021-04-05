import React from 'react';
import { Grid, Icon, makeStyles, Typography } from '@material-ui/core';
import icon from '../assets/icon.png';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    maxWidth: '100px',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography variant="h1" color="initial">
          PockeTools
        </Typography>
      </Grid>
      <Grid item>
        <Icon>
          <img src={icon} alt="pocket tools icon" className={classes.image} />
        </Icon>
        <p>This is the oficial page of pocket tools</p>
      </Grid>
    </Grid>
  );
}
