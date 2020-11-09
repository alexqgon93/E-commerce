import useLocalStorage from 'react-localstorage-hook';
import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';

import endpoints from './endpoints.json';

export function logout() {
  localStorage.clear();
}

export function login(userData: { username: string; password: string }): Promise<{ token: string; user: any }> {
  const url = new URL(hostBaseUrl + endpoints.login);
  return ApiService.post<{ token: string; user: any }>(url);
}

export default { logout };
