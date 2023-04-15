import { Box } from 'components/Box/Box';
import { Button, Email, Welcome } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectorUserEmail } from 'redux/auth/authSelector';

export const UserMenu = () => {
  const email = useSelector(selectorUserEmail);
  const dispatch = useDispatch();
  return (
    <Box display="flex" alignItems="center" mx="20px">
      <Box display="flex" flexDirection="column" px={3}>
        <Welcome>Welcome</Welcome>
        <Email>{email}</Email>
      </Box>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </Box>
  );
};
