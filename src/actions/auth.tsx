import { Login } from '../components/types';
import AuthService from '../services/auth.service';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from './types';

const register = (
  name: string,
  surname: string,
  username: string,
  password: string,
  email: string,
  date_birth: string
) => (dispatch: (arg0: { type: string }) => void) => {
  return AuthService.register({ name, surname, username, password, email, date_birth }).then(
    () => {
      dispatch({ type: REGISTER_SUCCESS });
      return Promise.resolve();
    },
    () => {
      dispatch({ type: REGISTER_FAIL });
      return Promise.reject();
    }
  );
};

const logout = () => (dispatch: (arg0: { type: string }) => void) => {
  AuthService.logout();
  dispatch({ type: LOGOUT });
};

const login = (username: string, password: string) => (
  dispatch: (arg0: { type: string; payload?: { user: Login } }) => void
) => {
  return AuthService.login({ username, password }).then(
    (data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: { user: data } });
      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: LOGIN_FAIL });
      return Promise.reject();
    }
  );
};

export default { register, logout, login };
