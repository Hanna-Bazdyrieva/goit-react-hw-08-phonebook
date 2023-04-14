import Section from 'components/Section/Section';
import UserForm from 'components/UserForm/UserForm';
import { registerUser } from 'redux/auth/authOperations';

export const RegisterPage = params => {
  return (
    <Section title='Register'>
      <UserForm onSubmit={registerUser} btnSubmit="Register" />
    </Section>
  );
};
