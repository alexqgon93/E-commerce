import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    button: {
      textDecorationColor: '#FAFAF9',
      background: 'linear-gradient(106deg, #FAFAF9 0%, #B4957E 105%)',
    },

    h1: {
      color: '#4B5B9D',
      fontSize: '1.875rem',
    },
    h2: {
      color: '#4B5B9D',
      fontSize: '1.5625rem',
    },
    h3: {
      color: '#4B5B9D',
      fontSize: '1.5625rem',
    },
    h4: {
      color: '#4B5B9D',
      fontSize: '1.375rem',
    },
    h5: {
      color: '#B4957E',
      fontSize: '1.375rem',
    },
    body1: {
      color: '#4B5B9D',
      letterSpacing: '0.004rem',
    },
    body2: {
      color: '#FAFAF9',
    },
  },
  palette: {
    primary: {
      dark: '#F2F1EF',
      main: '#4B5B9D',
    },
    secondary: {
      main: '#AE939A',
      dark: '#8C7896',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: 'linear-gradient(234deg, #fafaf9, #8c796a)',
    },
  },
});

export default theme;
