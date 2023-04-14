import Section from 'components/Section/Section';
import UserForm from 'components/UserForm/UserForm';
import { loginUser } from 'redux/auth/authOperations';

export const LoginPage = () => {
  return (
    <Section title="Login">
      <UserForm onSubmit={loginUser} btnSubmit="Login" />
    </Section>
  );
};
