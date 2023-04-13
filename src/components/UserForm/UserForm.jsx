import { useState, memo } from 'react';
import { Box } from 'components/Box/Box';
import { InputLabel, AddBtn, Input } from '../ContactForm/ContactForm.styled';
// import { loginUserApi } from "services/firebaseApi";
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';
// import { selectContacts } from 'redux/selectors';

const UserForm = ({onSubmit, btnSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


//   const dispatch = useDispatch();

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//   };


  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    // dispatch(addContact({ name, number, id: uuidv4() }));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Box
        display="flex"
        flexDirection="column"
        mx="auto"
        my={4}
        px={6}
        py={4}
        bg="list"
        borderRadius="20px"
      >
        <InputLabel htmlFor="emailInput">Email</InputLabel>
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Enter Name"
          value={email}
          onChange={handleInputChange}
          pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
          title="Email may contain only letters and numbers. For example user99@mail.com"
          required
        />

        <InputLabel htmlFor="passwordInput">Password</InputLabel>
        <Input
          type="text"
          id="passwordInput"
          placeholder="Enter password"
          name="password"
          pattern="/^[a-z0-9_-]{6,18}$/"
          title="Password must be 6 to 18 letters, digits and can contain - or _ "
          required
          value={password}
          onChange={handleInputChange}
        />
        <AddBtn type="submit">{btnSubmit}</AddBtn>
      </Box>
    </form>
  );
};

export default memo(UserForm);