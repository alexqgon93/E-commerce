import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyles';
import Container from '@material-ui/core/Container';
import useLocalStorage from 'react-localstorage-hook';
import passwordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';

export default function LoginPage() {
  const classes = useStyles();
  const [item, setItem] = useLocalStorage('token', null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: { target: { value: any } }) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e: { target: { value: any } }) => {
    const password = e.target.value;
    setPassword(password);
  };

  const isValidPassword = () => {
    var schema = new passwordValidator();
    schema
      .is()
      .min(5)
      .is()
      .max(10)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(2)
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf(['Passw0rd', 'Password123']);
    return schema.validate(password);
  };

  const loginAuth = () => {
    if (EmailValidator.validate(email) && isValidPassword()) {
      alert('inputs validos');
      // aqui lanzamos el login query
      /*let req: any;
    if (req) {
      setItem(req.token);
    }*/
    } else {
      alert('inputs no validos');
      //aqui debemos borrar los elementos e informar al user de que no esta añadiendo correctamente la info
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={loginAuth}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            value={email}
            onChange={onChangeEmail}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Register now"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
