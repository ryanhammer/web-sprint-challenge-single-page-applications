import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('You must enter a name for the order')
    .min(2, 'The name must be at least 2 characters long'),
  size: yup
    .string()
    .required('You must select a size for your pizza'),
  sauce: yup
    .string()
    .required('You must select a type of sauce for your pizza'),
  x_cheese: yup.string(),
  pepperoni: yup.string(),
  sausage: yup.string(),
  ham: yup.string(),
  bacon: yup.string(),
  pineapple: yup.string(),
  spinach: yup.string(),
  green_peppers: yup.string(),
  gluten: yup.string(),
  instructions: yup.string()
})