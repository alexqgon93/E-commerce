import * as yup from 'yup';

const RegexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
export const loginSchema = yup.object().shape({
  email: yup.string().required().email('Introduce una dirección de correo electrónica válida.'),
  password: yup.string().required().matches(RegexPassword, 'Introduce una contraseña válida.'),
});
