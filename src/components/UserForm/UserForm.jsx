import { useState, memo } from 'react';
import { Box } from 'components/Box/Box';
import { InputLabel, AddBtn, Input } from '../ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
// import { loginUserApi } from "services/firebaseApi";
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';
// import { selectContacts } from 'redux/selectors';

const UserForm = ({onSubmit, btnSubmit}) => {
const initialForm = {
  name:"",
  email: "",
  password: "",
}
  const [form, setForm] = useState(initialForm);
const {name, email, password} = form

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    setForm((data)=>({...data, [name]: value}))
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    console.log(form)
    dispatch(onSubmit(form));
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
        {btnSubmit === 'Register' && <> <InputLabel htmlFor="nameInput">Name</InputLabel>
        <Input
          type="text"
          name="name"
          id="namelInput"
          placeholder="Enter Name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></>}
        <InputLabel htmlFor="emailInput">Email</InputLabel>
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Enter Email"
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
          placeholder="Enter Password"
          name="password"
          pattern="^[a-z0-9_-]{6,18}$"
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