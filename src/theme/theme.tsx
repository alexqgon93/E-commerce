import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.875rem',
    },
    h2: {
      fontSize: '1.5625rem',
    },
    h3: {
      fontSize: '1.5625rem',
    },
    h4: {
      fontSize: '1.375rem',
    },
    h5: {
      fontSize: '1.375rem',
    },
    body1: {
      letterSpacing: '0.004rem',
    },
    body2: {
      color: '#35261a',
    },
  },
  palette: {
    primary: {
      dark: '#F2F1EF',
      main: '#D8CFD0',
    },
    secondary: {
      main: '#B1A6A4',
      dark: '#413F3D',
    },
    error: {
      main: '#ff5252',
    },
    background: {
      default: '#F2F1EF',
    },
  },
});

export default theme;
