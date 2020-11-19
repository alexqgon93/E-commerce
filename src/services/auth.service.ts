import useLocalStorage from 'react-localstorage-hook';
import { Login, Register } from '../components/types';
import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';

import endpoints from './endpoints.json';

const logout = () => {
  localStorage.clear();
};

export async function login(userData: { email: string; password: string }): Promise<Login> {
  const url = new URL(hostBaseUrl + endpoints.login);
  return ApiService.post<Login>(url, JSON.stringify(userData));
}

export async function register(userData: {
  name: string;
  surname: string;
  password: string;
  email: string;
  dateBirth: string;
}): Promise<Register> {
  const url = new URL(hostBaseUrl + endpoints.login.register);
  return ApiService.post<Register>(url, JSON.stringify(userData));
}

export default { logout, register };
