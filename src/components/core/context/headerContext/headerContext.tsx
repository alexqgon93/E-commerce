import React, { createContext, useState, ReactNode, ReactElement } from 'react';

type HeaderContextType = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderContextProvider = ({ children }: Props): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
