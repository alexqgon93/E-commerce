export const hostBaseUrl =
  window.location.hostname === 'localhost' ? 'https://local.api.localhost' : window.location.origin;

export const jsonContentType = {
  'Content-Type': 'application/json',
};
