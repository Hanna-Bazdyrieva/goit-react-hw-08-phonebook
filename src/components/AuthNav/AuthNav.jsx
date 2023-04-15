import { Box } from 'components/Box/Box';
import { RiLoginBoxFill, RiLoginBoxLine } from 'react-icons/ri';
import { Link } from '../Navigation/Navigation.styled';
import { IconContext } from 'react-icons';

const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center" mx={2}>
      <Link to="/login">
        <IconContext.Provider
          value={{
            size: '30px',
            style: { verticalAlign: 'middle', padding: '2px 5px' },
          }}
        >
          <RiLoginBoxFill />
        </IconContext.Provider>
        Log In
      </Link>
      <Link to="/register">
        <IconContext.Provider
          value={{
            size: '30px',
            style: { verticalAlign: 'middle', padding: '2px 5px' },
          }}
        >
          <RiLoginBoxLine />
        </IconContext.Provider>
        Register
      </Link>
    </Box>
  );
};

export default AuthNav;
