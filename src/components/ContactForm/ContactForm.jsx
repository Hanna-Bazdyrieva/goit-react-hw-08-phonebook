import { useState, memo } from 'react';
import { Box } from 'components/Box/Box';
import { v4 as uuidv4 } from 'uuid';
import { InputLabel, AddBtn, Input } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const isNameExists = () =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  const isNumberExists = () =>
    contacts.find(contact => contact.number === number);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const isName = isNameExists();
    const isNumber = isNumberExists();

    if (isName || isNumber) {
      alert(
        `This  ${isName ? `contact ${isName.name}` : ''} ${
          isNumber ? `number ${isNumber.number}` : ''
        } already exists`
      );
      return;
    }
    dispatch(addContact({ name, number, id: uuidv4() }));
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
        <InputLabel htmlFor="nameInputId">Name</InputLabel>
        <Input
          type="text"
          name="name"
          id="nameInputId"
          placeholder="Enter Name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <InputLabel htmlFor="numberInput">Number</InputLabel>
        <Input
          type="tel"
          id="numberInput"
          placeholder="Enter Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <AddBtn type="submit">Add contact</AddBtn>
      </Box>
    </form>
  );
};

export default memo(ContactForm);
