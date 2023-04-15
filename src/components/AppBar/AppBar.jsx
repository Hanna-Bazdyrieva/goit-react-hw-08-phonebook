import { Box } from 'components/Box/Box';
import { useSelector } from 'react-redux';
import { selectorIsAuth } from 'redux/auth/authSelector';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mx="auto"
      my={0}
      px={1}
      py={3}
      bg="list"
      borderRadius="20px"
    >
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
