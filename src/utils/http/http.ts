export const hostBaseUrl =
  window.location.hostname === 'localhost' ? 'http://local.api.localhost' : window.location.origin;

export const jsonContentType = {
  'Content-Type': 'application/json',
};
