import React, { createContext, useReducer } from 'react';
import { UserReducer } from './userReducer';

const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
const initialState = { user: storage, userLogged: false };
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const userLoggedIn = (payload) => {
    dispatch({ type: 'LOGGED_IN', payload });
  };

  const contextValues = {
    logout,
    userLoggedIn,
    ...state,
  };
  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
