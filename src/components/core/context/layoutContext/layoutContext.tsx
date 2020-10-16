import React, { ReactElement } from 'react';
import { HeaderContextProvider } from '../headerContext/headerContext';

const LayoutContext = (Element: () => ReactElement): ReactElement => (
  <HeaderContextProvider>
    <Element />
  </HeaderContextProvider>
);

export default LayoutContext;
