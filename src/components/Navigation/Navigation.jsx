import { Box } from 'components/Box/Box';
import { useSelector } from 'react-redux';
import { selectorIsAuth } from 'redux/auth/authSelector';
import { RiContactsBookFill, RiHomeHeartLine } from 'react-icons/ri';
import { Link } from './Navigation.styled';
import { IconContext } from 'react-icons';

export const Navigation = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <Box
      display="flex"
      mx={2}
      my={3}
      px={2}
      py={4}
      bg="list"
      borderRadius="20px"
    >
      <Link to="/">
        <IconContext.Provider
          value={{
            size: '30px',
            style: { verticalAlign: 'middle', padding: '2px 5px' },
          }}
        >
          <RiHomeHeartLine />
        </IconContext.Provider>
        Home
      </Link>
      {isAuth && (
        <>
          <Link to="/phonebook">
            <IconContext.Provider
              value={{
                size: '30px',
                style: { verticalAlign: 'middle', padding: '2px 5px' },
              }}
            >
              <RiContactsBookFill />
            </IconContext.Provider>
            Phonebook
          </Link>
        </>
      )}
    </Box>
  );
};
