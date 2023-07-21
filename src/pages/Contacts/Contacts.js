import ContactsList from 'components/contacts/contactList/ContactsList';
import Filter from 'components/contacts/filter/Filter';
import Form from 'components/contacts/form/Form';
import {
  Container,
  ContainerListContacts,
  TitleContactList,
  TitlePhonebook,
  NullContactsMessage,
} from 'components/contacts/Contacts.styled';
import { useSelector } from 'react-redux';
import {
  selectContactsItems,
  selectError,
  selectIsAllLoading,
} from 'redux/contactsLogics/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsLogics/operation';
import Loader from 'components/loader/Loader';
import { constMessage } from 'components/helpers/constMessage';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const Contacts = () => {
  const contacts = useSelector(selectContactsItems);
  const isLoading = useSelector(selectIsAllLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form />

      <TitleContactList>Contacts</TitleContactList>
      <ContainerListContacts>
        <Filter />
        {isLoading && <Loader />}
        {isError && <ErrorMessage>{constMessage.errorFetch}</ErrorMessage>}
        {contacts.length > 0 && !isError ? (
          <ContactsList />
        ) : (
          <>
            {!isLoading && !isError && (
              <NullContactsMessage>
                {constMessage.emptyList}
              </NullContactsMessage>
            )}
          </>
        )}
      </ContainerListContacts>
    </Container>
  );
};

export default Contacts;
