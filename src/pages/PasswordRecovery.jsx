import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useRef, useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useAuth } from '../context/AuthContext';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PasswordRecovery() {
  const classes = useStyles();
  const { recoveryPassword } = useAuth();
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.childNodes[1].childNodes[0].value;
    setLoading(true);
    setMsg('');
    setError('');
    try {
      await recoveryPassword(email);
      setMsg('Check your email for futher instructions');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Recovery your password
        </Typography>
        {msg && <Alert severity="success">{msg}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            ref={emailRef}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
