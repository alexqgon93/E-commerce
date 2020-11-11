import useLocalStorage from 'react-localstorage-hook';
import { Login } from '../components/types';
import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';

import endpoints from './endpoints.json';

const logout = () => {
  localStorage.clear();
};

const login = (userData: { username: string; password: string }): Promise<Login> => {
  const url = new URL(hostBaseUrl + endpoints.login);
  return ApiService.post<Login>(url, JSON.stringify(userData));
};

const register = (userData: {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  date_birth: string;
}) => {
  const url = new URL(hostBaseUrl + endpoints.login.register);
  return ApiService.post(url, JSON.stringify(userData));
};

export default { logout, login, register };
