import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import NoContacts from 'components/NoContacts/NoContacts';
import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth } from 'redux/auth/authSelector';
import { getContacts } from 'redux/contacts/contactsOperations';
import { selectIsContactsExist, selectIsLoading } from 'redux/selectors';

export const PhonebookPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isContacts = useSelector(selectIsContactsExist);
  const isAuth = useSelector(selectorIsAuth);

  useEffect(() => {
    !isContacts && dispatch(getContacts());
  }, [isContacts, dispatch]);

  return (
    <Section>
      {isAuth && (
        <>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Contacts">
            {isLoading && <Loader />}
            {isContacts && (
              <>
                <Filter />
                <ContactList />
              </>
            )}
            {!isContacts && !isLoading && (
              <NoContacts message="You have no contacts so far..." />
            )}
          </Section>
        </>
      )}
    </Section>
  );
};
