import { jwtType, Login, Register } from '../components/types';
import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';

import endpoints from './endpoints.json';

const logout = () => {
  localStorage.clear();
};

export async function login(userData: { email: string; password: string }): Promise<Login> {
  const url = new URL(hostBaseUrl + endpoints.login.login);
  const headers = { ...jsonContentType };
  return ApiService.post<Login>(url, JSON.stringify(userData), headers).then((response) => {
    console.log(response);
    if (response) {
      localStorage.setItem('id_token', response.jwt);
      var jwt = require('jsonwebtoken');

      const decode = jwt.decode(response.jwt);
      localStorage.setItem('user', JSON.stringify((decode as jwtType).data));
    }
    return response;
  });
}

export async function register(userData: {
  name: string;
  surname: string;
  password: string;
  email: string;
  dateBirth: string;
}): Promise<Register> {
  const url = new URL(hostBaseUrl + endpoints.login.register);
  const headers = { ...jsonContentType };
  return ApiService.post<Register>(url, JSON.stringify(userData), headers);
}

export const jsonContentType = {
  'Content-Type': 'application/json',
};

export default { logout, register };
