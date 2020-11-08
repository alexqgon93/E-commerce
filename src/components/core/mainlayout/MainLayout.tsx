import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer/footer';
import Header from '../header/header';
import useStyles from './mainLayoutStyle';

const MainLayout = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
