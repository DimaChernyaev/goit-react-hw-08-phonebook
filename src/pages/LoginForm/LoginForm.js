import { Formik, Field, Form, ErrorMessage } from 'formik';
const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={submitForm}
      // validationSchema={validationSchema}
    >
      <Form>
        <label>
          <p>Login</p>
          <Field type="email" name="email" />
          {/* <ErrorMessage name="name" component={ValidationError} /> */}
        </label>
        <label>
          <p>Number</p>
          <Field type="password" name="password" />
          {/* <ErrorMessage name="number" component={ValidationError} /> */}
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
