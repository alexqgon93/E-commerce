export interface ApiService {
  get: <T>(url: URL, headers?: string[][] | Record<string, string> | undefined) => Promise<T>;
  post: <T>(url: URL, params?: BodyInit, headers?: string[][] | Record<string, string> | undefined) => Promise<T>;
}

const get = async <T>(url: URL, headers?: string[][] | Record<string, string> | undefined): Promise<T> => {
  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers,
  }).then<T>((response) => response.json());
};

const post = async <T>(
  url: URL,
  params?: BodyInit,
  headers?: string[][] | Record<string, string> | undefined
): Promise<T> => {
  return fetch(url.toString(), {
    method: 'POST',
    credentials: 'include',
    headers: new Headers(headers),
    body: params,
  }).then<T>((response) => response.json());
};
