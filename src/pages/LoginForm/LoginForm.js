import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/authLogics/operationAuth';
import {
  ButtonAuth,
  LabelAuth,
  FormAuth,
  InputAuth,
  InputTitleAuth,
  ValidationErrorAuth,
  FormAuthTitle,
  FormAuthWrapper,
  TextFormAuth,
} from 'components/pageStyled/AutorizationForm.styled';
import * as yup from 'yup';
import { selectError } from 'redux/authLogics/selectorsAuth';
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(6, 'Your email must be at least 6 characters.')
    .required('Email is a required field! Please, fill the field.'),
  password: yup
    .string()
    .min(4, 'Your password must be at least 4 characters.')
    .required('Password is a required field! Please, fill the field.'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleLoginUser = async (values, { resetForm }) => {
    try {
      await dispatch(loginUser(values));
      resetForm();

      if (error !== null) {
        toast.error('Password or email is incorrect, please try again!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormAuthWrapper>
      <Toaster position="top-center" />
      <FormAuthTitle>Login Form</FormAuthTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLoginUser}
        validationSchema={validationSchema}
      >
        <FormAuth>
          <LabelAuth>
            <InputTitleAuth>Email</InputTitleAuth>
            <InputAuth type="email" name="email" />
            <ErrorMessage name="name" component={ValidationErrorAuth} />
          </LabelAuth>
          <LabelAuth>
            <InputTitleAuth>Password</InputTitleAuth>
            <InputAuth type="password" name="password" />
            <ErrorMessage name="number" component={ValidationErrorAuth} />
          </LabelAuth>
          <ButtonAuth type="submit">Login</ButtonAuth>
        </FormAuth>
      </Formik>
      <TextFormAuth>Log in and start managing your contacts!</TextFormAuth>
    </FormAuthWrapper>
  );
};

export default LoginForm;
