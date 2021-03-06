import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getAllProducts(): Promise<Array<Types.Products>> {
  const url = new URL(hostBaseUrl + endpoints.products.getAll);
  return ApiService.get<Array<Types.Products>>(url);
}

export function getProductById(id: number): Promise<Types.Products> {
  const url = new URL(hostBaseUrl + endpoints.products.getProductById + id);
  return ApiService.get<Types.Products>(url);
}

export function getProductByCategoryId(id: number): Promise<Array<Types.Products>> {
  const url = new URL(hostBaseUrl + endpoints.products.getProductsByCategory + id);
  return ApiService.get<Array<Types.Products>>(url);
}

export function getFeaturedProducts(): Promise<Array<Types.Products>> {
  const url = new URL(hostBaseUrl + endpoints.products.getFeaturedProducts);
  return ApiService.get<Array<Types.Products>>(url);
}
