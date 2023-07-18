import UserMenu from 'components/UserMenu/UserMenu';
import AuthNavigation from 'components/authNavigation/AuthNavigation';
import { NavLink } from 'react-router-dom';
import { NavigationList, WrapperLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationList>
      <WrapperLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </WrapperLink>
      <AuthNavigation />
      <UserMenu />
    </NavigationList>
  );
};
export default Navigation;
