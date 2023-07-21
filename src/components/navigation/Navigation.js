import UserMenu from 'components/UserMenu/UserMenu';
import AuthNavigation from 'components/authNavigation/AuthNavigation';
import { NavLink } from 'react-router-dom';
import { NavigationList, WrapperLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authLogics/selectorsAuth';
import { NavigationLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationList>
      <WrapperLink>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/contacts">Contacts</NavigationLink>
      </WrapperLink>
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </NavigationList>
  );
};
export default Navigation;
