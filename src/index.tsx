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
import CartContextProvider from './components/core/context/storeContexts/cartContext';
import UserContextProvider from './components/core/context/userContext/userContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
