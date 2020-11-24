import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';
import { AddedCart } from '../components/types';

export function getCarts(): Promise<Array<Types.Carts>> {
  const url = new URL(hostBaseUrl + endpoints.cart.getAll);
  return ApiService.get<Array<Types.Carts>>(url);
}

export function deleteCardById(id: string): Promise<Types.DeletedCart> {
  const url = new URL(hostBaseUrl + endpoints.cart.deleteCardById + id);
  return ApiService.deleteForm<Types.DeletedCart>(url);
}

export function postNewCart(cartData: {
  userId: string;
  date: string;
  amount: number;
  products: any[];
}): Promise<AddedCart> {
  const url = new URL(hostBaseUrl + endpoints.cart.addCart);
  const headers = { ...jsonContentType, Authorization: 'Bearer ' + localStorage.getItem('id_token') };
  return ApiService.post<AddedCart>(url, JSON.stringify(cartData), headers);
}

export const bearerContentType = {
  Authorization: 'Bearer',
};

export const jsonContentType = {
  'Content-Type': 'application/json',
};
