import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { PhonebookPage } from 'pages/PhonebookPage';
import { refreshUser } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { HomePage } from 'pages/HomePage';
import Layout from 'components/Layout/Layout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/" component={<PhonebookPage />} />
          }
        />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
};

export default App;
