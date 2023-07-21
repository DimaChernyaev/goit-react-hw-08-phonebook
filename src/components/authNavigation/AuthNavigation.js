import {
  WrapperLogLink,
  ButtonRegistration,
  ButtonLogin,
  Line,
} from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <WrapperLogLink>
      <ButtonRegistration to="/register">Register</ButtonRegistration>
      <Line></Line>
      <ButtonLogin to="/login">Log In</ButtonLogin>
    </WrapperLogLink>
  );
};

export default AuthNavigation;
