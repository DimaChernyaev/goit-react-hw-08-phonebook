import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authLogics/operationAuth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/authLogics/selectorsAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './sharedLoyout/SharedLoyout';
import Loader from './loader/Loader';
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));
const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="login" component={<Contacts />} />}
        />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default App;
