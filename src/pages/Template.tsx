import React, { ReactElement } from 'react';
import Footer from '../components/footer/footer';

const Template = (): ReactElement => {
  return (
    <div>
      <header>
        <h1>Sitio web de mis cervezas</h1>
      </header>
      <main>{this.props.children}</main>
      <Footer />
    </div>
  );
};

export default Template;
