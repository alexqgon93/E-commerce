import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getAllCategories(): Promise<Array<Types.Categories>> {
  const url = new URL(hostBaseUrl + endpoints.categories.getAll);
  return ApiService.get<Array<Types.Categories>>(url);
}

export function getCategoryById(id: number): Promise<Types.Categories> {
  const url = new URL(hostBaseUrl + endpoints.categories.getCategoryById + id);
  return ApiService.get<Types.Categories>(url);
}
