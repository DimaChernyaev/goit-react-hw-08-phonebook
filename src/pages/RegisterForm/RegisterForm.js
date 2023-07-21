import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registeringUser } from 'redux/authLogics/operationAuth';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegisteringUser}
      // validationSchema={validationSchema}
    >
      <Form>
        <label>
          <p>Name</p>
          <Field type="text" name="name" />
          {/* <ErrorMessage name="name" component={ValidationError} /> */}
        </label>
        <label>
          <p>Email</p>
          <Field type="email" name="email" />
          {/* <ErrorMessage name="name" component={ValidationError} /> */}
        </label>
        <label>
          <p>Password</p>
          <Field type="password" name="password" />
          {/* <ErrorMessage name="number" component={ValidationError} /> */}
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
