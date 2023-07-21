import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/authLogics/selectorsAuth';
import { logoutUser } from 'redux/authLogics/operationAuth';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(name);

  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
