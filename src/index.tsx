import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import { CssBaseline } from '@material-ui/core';
import { StateProvider } from './components/core/context/context/cartContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
