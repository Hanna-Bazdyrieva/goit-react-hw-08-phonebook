import Section from 'components/Section/Section';
import UserForm from 'components/UserForm/UserForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from 'redux/auth/authOperations';
import { selectorAuthError } from 'redux/auth/authSelector';

export const RegisterPage = () => {
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
    <Section title='Register'>
      <UserForm onSubmit={registerUser} btnSubmit="Register" />
    </Section>
  );
};
