import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './RegisterStyles';
import Container from '@material-ui/core/Container';

const RegisterPage = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [successful, setSuccessful] = useState(false);

  const onChangeName = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const onChangeSurName = (e: { target: { value: string } }) => {
    setSurName(e.target.value);
  };

  const onChangeUsername = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: { target: { value: string } }) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const onChangeDateBirth = (e: { target: { value: string } }) => {
    setDateBirth(e.target.value);
  };

  const handleRegister = () => {
    //When response is going to be ok:
    setSuccessful(true);
    //When response is going bad:
    setSuccessful(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={name}
                onChange={onChangeName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="surName"
                label="Surname"
                name="surName"
                value={surname}
                onChange={onChangeSurName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChangeEmail}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={onChangePassword}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="-----"
                className={classes.datePicker}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
