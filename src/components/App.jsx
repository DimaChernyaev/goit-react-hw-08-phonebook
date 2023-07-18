import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './sharedLoyout/SharedLoyout';
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));
const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default App;
