import { Box } from 'components/Box/Box';
import {
  //  useDispatch,
    useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorIsAuth } from 'redux/auth/authSelector';
import {
  RiContactsBookFill,
  RiLoginBoxFill,
  RiLoginBoxLine,
} from 'react-icons/ri';
import { Header, Link } from './Navigation.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { IconContext } from 'react-icons';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Section from 'components/Section/Section';

export const Navigation = params => {
  // const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  return (
    <Section>
        <Box
        display="flex"
        flexDirection="column"
        mx="auto"
        my={4}
        px={5}
        py={4}
        bg="list"
        borderRadius="20px"
      >
      <Header>
        {isAuth ? (
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
            <UserMenu/>
          </>
        ) : (
          <>
            <Link to="/login">
              <IconContext.Provider
                value={{
                  size: '30px',
                  style: { verticalAlign: 'middle', padding: '2px 5px' },
                }}
              >
                <RiLoginBoxFill />
              </IconContext.Provider>
              Login
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
          </>
        )}
      </Header>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

// (
//     <Container>
//       <Header>
//         <Logo>
//           <IconContext.Provider
//             value={{
//               size: '50px',
//               style: { verticalAlign: 'middle', padding: '2px 5px' },
//             }}
//           >
//             <SiThemoviedatabase />
//           </IconContext.Provider>
//           {'    '}
//           Movie Finder
//         </Logo>
//         <nav>
//           <Link to="/" end>
//             <IconContext.Provider
//               value={{
//                 size: '30px',
//                 style: { verticalAlign: 'middle', padding: '2px 5px' },
//               }}
//             >
//               <IoHomeOutline />
//             </IconContext.Provider>
//             {'    '}
//             Home
//           </Link>
//           <Link to="/movies">
//             <IconContext.Provider
//               value={{
//                 size: '30px',
//                 style: { verticalAlign: 'middle', padding: '2px 5px' },
//               }}
//             >
//               <ImFilm />
//             </IconContext.Provider>
//             {'    '}
//             Movies
//           </Link>
//         </nav>
//       </Header>
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </Container>
//   );
