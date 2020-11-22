import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyles';
import Container from '@material-ui/core/Container';
import { useMutation } from 'react-query';
import { login } from '../../services/auth.service';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './login.schema';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(loginSchema) });
  const [postLogin] = useMutation(login);

  const loginAuth = async (data: any): Promise<void> => {
    try {
      const loginData = await postLogin({ email: data.email, password: data.password });
      if (loginData) {
        alert(loginData.message);
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(loginAuth)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            inputRef={register}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            inputRef={register}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {'No tienes aun una cuenta? Registrate ahora'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
