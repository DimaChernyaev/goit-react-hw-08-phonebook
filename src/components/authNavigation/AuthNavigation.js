import { NavLink } from 'react-router-dom';
import { WrapperLogLink } from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <WrapperLogLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </WrapperLogLink>
  );
};

export default AuthNavigation;
