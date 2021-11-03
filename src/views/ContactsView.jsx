// import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsSlice';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/СontactForm/СontactForm';
import ContactList from 'components/СontactList/СontactList';
import Filter from 'components/Filter/Filter';
// import Loader from 'components/Loader/Loader';
import { PhonebookTitle, ContactTitle } from './ContactsView.styled';

const ContactsView = () => {
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactsView;
