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

export default function LoginPage() {
  const classes = useStyles();
  const [item, setItem] = useLocalStorage('token', null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const userNameRegex = '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$';
  };

  const onChangeUsername = (e: { target: { value: any } }) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e: { target: { value: any } }) => {
    const password = e.target.value;
    setPassword(password);
  };

  const loginAuth = () => {
    let req: any;
    if (req) {
      setItem(req.token);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            value={username}
            onChange={onChangeUsername}
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
