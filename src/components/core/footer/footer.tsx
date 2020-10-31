import { Container, Typography, Link, CssBaseline } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './footerStyle';

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.typography}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Motorcycle E-commerce
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = (): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
