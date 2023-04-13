import ContactForm from "components/ContactForm/ContactForm"
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import Loader from "components/Loader/Loader"
import NoContacts from "components/NoContacts/NoContacts"
import Section from "components/Section/Section"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "redux/contactsOperations"
import { selectIsContactsExist, selectIsLoading } from "redux/selectors"


export const PhonebookPage = ()=>{

    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const isContacts = useSelector(selectIsContactsExist);
  
    useEffect(() => {
      !isContacts && dispatch(getContacts());
    }, [isContacts, dispatch]);
  
    return(
        <Section>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {isLoading && <Loader />}
          {isContacts && (
            <>
              <Filter />
              <ContactList/>
            </>
          )}
          {!isContacts && !isLoading && (
            <NoContacts message="You have no contacts so far..." />
          )}
        </Section>
      </Section>
    )
}