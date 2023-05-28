import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, refreshUser } from 'redux/user/user-operation';
import { selectUser } from 'redux/user/user-selectors';
import { Button, TextUser, WrapMenu } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <WrapMenu>
      <TextUser>{user?.name}</TextUser>
      <Button onClick={() => dispatch(logOut())}>Logout </Button>
    </WrapMenu>
  );
};

export default UserMenu;
