import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registeringUser } from 'redux/authLogics/operationAuth';
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

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Your name must be at least 2 characters.')
    .required('Name is a required field! Please, fill the field.'),
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisteringUser = (values, { resetForm }) => {
    console.log(values);
    try {
      dispatch(registeringUser(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormAuthWrapper>
      <FormAuthTitle>Registration form</FormAuthTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleRegisteringUser}
        validationSchema={validationSchema}
      >
        <FormAuth>
          <LabelAuth>
            <InputTitleAuth>Name</InputTitleAuth>
            <InputAuth type="text" name="name" />
            <ErrorMessage name="name" component={ValidationErrorAuth} />
          </LabelAuth>
          <LabelAuth>
            <InputTitleAuth>Email</InputTitleAuth>
            <InputAuth type="email" name="email" />
            <ErrorMessage name="email" component={ValidationErrorAuth} />
          </LabelAuth>
          <LabelAuth>
            <InputTitleAuth>Password</InputTitleAuth>
            <InputAuth type="password" name="password" />
            <ErrorMessage name="password" component={ValidationErrorAuth} />
          </LabelAuth>
          <ButtonAuth type="submit">Register</ButtonAuth>
        </FormAuth>
      </Formik>
      <TextFormAuth>
        Only registered users have access to the phone book. Please register!.
      </TextFormAuth>
    </FormAuthWrapper>
  );
};

export default RegisterForm;
