import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './RegisterStyles';
import Container from '@material-ui/core/Container';
import passwordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';
import { useMutation } from 'react-query';
import { register } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [postRegister] = useMutation(register);

  const onChangeName = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const onChangeSurName = (e: { target: { value: string } }) => {
    setSurName(e.target.value);
  };

  const onChangePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const handleRegister = async (): Promise<void> => {
    console.log(dateBirth);
    if (EmailValidator.validate(email) && isValidPassword()) {
      try {
        const register = await postRegister({ name, surname, password, email, dateBirth });
        if (register && register.status === 200) {
          setSuccessful(true);
          alert(`${register?.message}`);
          navigate('/login');
        } else {
          setSuccessful(false);
          alert(`Error: ${register?.message}`);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert(
        'La información introducida no es correcta, recuerda que ha de ser un email valido y la password ha de ser de entre 5 y 10 digitos, con mayusculas y minusculas, que no tenga espacios'
      );
    }
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
                required
                defaultValue="-----"
                className={classes.datePicker}
                value={dateBirth}
                onChange={(newValue) => setDateBirth(newValue?.target.value)}
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
