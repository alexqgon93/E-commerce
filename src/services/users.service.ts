import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getAllUsers(): Promise<Array<Types.Users>> {
  const url = new URL(hostBaseUrl + endpoints.login.getAll);
  return ApiService.get<Array<Types.Users>>(url);
}

export function getUserById(id: number): Promise<Types.Users> {
  const url = new URL(hostBaseUrl + endpoints.login.getUserById + '/' + id);
  return ApiService.get<Types.Users>(url);
}
