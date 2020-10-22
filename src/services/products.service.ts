import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getAllProducts(): Promise<Array<Types.Products>> {
  const url = new URL(hostBaseUrl + endpoints.products.getAll);
  return ApiService.get<Array<Types.Products>>(url);
}
