import * as yup from 'yup';

export const formValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(3).max(32),
});

export const initialFormValues = {
  email: '',
  password: '',
};
