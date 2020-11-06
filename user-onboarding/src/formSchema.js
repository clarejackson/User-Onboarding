import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('Name is required'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string() 
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long'),
    // .matches(/[a-zA-Z]/, 'Password must contain only letters')
  terms: yup.bool()

})