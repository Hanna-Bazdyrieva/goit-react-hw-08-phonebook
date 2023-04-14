import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { PhonebookPage } from 'pages/PhonebookPage';
import { refreshUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
    }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
       <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/phonebook" element={<PhonebookPage />} />
      {/* <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
