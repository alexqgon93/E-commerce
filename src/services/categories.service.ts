import { hostBaseUrl } from '../utils/http/http';
import * as ApiService from './api.service';
import * as Types from '../components/types';
import endpoints from './endpoints.json';

export function getAllCategories(): Promise<Array<Types.Categories>> {
  const url = new URL(hostBaseUrl + endpoints.categories.getAll);
  return ApiService.get<Array<Types.Categories>>(url);
}
