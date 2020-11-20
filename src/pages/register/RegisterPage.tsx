import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './RegisterStyles';
import Container from '@material-ui/core/Container';
import { useMutation } from 'react-query';
import { register as registerService } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerSchema } from './register.schema';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(registerSchema) });
  const navigate = useNavigate();
  const classes = useStyles();
  const [postRegister] = useMutation(registerService);

  const handleRegister = async (data: any): Promise<void> => {
    try {
      const registerData = await postRegister({
        name: data.firstName,
        surname: data.surName,
        password: data.password,
        email: data.email,
        dateBirth: data.date,
      });
      if (registerData) {
        alert(`${registerData?.message}`);
        navigate('/login');
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
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(handleRegister)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
                id="firstName"
                label="First Name"
                inputRef={register}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="surName"
                error={errors.surName ? true : false}
                helperText={errors.surName?.message}
                label="Surname"
                name="surName"
                inputRef={register}
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
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                name="email"
                inputRef={register}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={errors.password ? true : false}
                helperText={errors.password?.message}
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={register}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                error={errors.date ? true : false}
                helperText={errors.date?.message}
                name="date"
                required
                className={classes.datePicker}
                inputRef={register}
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
