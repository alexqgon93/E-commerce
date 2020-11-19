import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getCarts(): Promise<Array<Types.Carts>> {
  const url = new URL(hostBaseUrl + endpoints.cart.getAll);
  return ApiService.get<Array<Types.Carts>>(url);
}

export function deleteCardById(id: string): Promise<Types.DeletedCart> {
  const url = new URL(hostBaseUrl + endpoints.cart.deleteCardById + id);
  return ApiService.deleteForm<Types.DeletedCart>(url);
}
