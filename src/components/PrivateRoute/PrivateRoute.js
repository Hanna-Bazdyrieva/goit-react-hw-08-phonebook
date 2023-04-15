import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsAuth } from 'redux/auth/authSelector';

const PrivateRoute = ({ component, redirectTo = '/phonebook' }) => {
  const isAuth = useSelector(selectorIsAuth);
  return isAuth ? component : <Navigate to={redirectTo} />
};

export default PrivateRoute

  
