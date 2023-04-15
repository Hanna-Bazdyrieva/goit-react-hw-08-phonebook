import Section from 'components/Section/Section';
import UserForm from 'components/UserForm/UserForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from 'redux/auth/authOperations';
import { selectorAuthError } from 'redux/auth/authSelector';

export const LoginPage = () => {
  const error = useSelector(selectorAuthError)
  const notify = (message) => toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    useEffect(() => {
      error && notify('oops... You entered incorrect data');
    }, [error]);

  return (
    <Section title="Login">
           <UserForm onSubmit={loginUser} btnSubmit="Log In" />

    </Section>
  );
};
