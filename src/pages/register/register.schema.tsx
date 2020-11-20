import * as yup from 'yup';

const RegexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
export const registerSchema = yup.object().shape({
  firstName: yup.string().required().max(15),
  surName: yup.string().required().max(15),
  password: yup.string().required().matches(RegexPassword, 'Mensaje informativo password'),
  email: yup.string().required().email('Mensaje informativo email'),
  date: yup.string().required(),
});
