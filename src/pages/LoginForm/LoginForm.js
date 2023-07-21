import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authLogics/operationAuth';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (values, { resetForm }) => {
    try {
      dispatch(loginUser(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLoginUser}
      // validationSchema={validationSchema}
    >
      <Form>
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

export default LoginForm;
