import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/authLogics/selectorsAuth';
import { logoutUser } from 'redux/authLogics/operationAuth';
import { WrapperUserMenu, ButtonLogout, UserName, UserWrapper } from './UserMenu.styled';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { FaGrinAlt } from 'react-icons/fa';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <WrapperUserMenu>
      <UserWrapper>
        <FaGrinAlt size={18} color="white" />
        <UserName>{name}</UserName>
      </UserWrapper>
      <ButtonLogout type="button" onClick={() => dispatch(logoutUser())}>
        Logout <BiSolidDoorOpen size={20} />
      </ButtonLogout>
    </WrapperUserMenu>
  );
};

export default UserMenu;
