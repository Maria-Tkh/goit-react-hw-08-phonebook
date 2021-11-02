// import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsSlice';
// import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/СontactForm/СontactForm';
import ContactList from 'components/СontactList/СontactList';
import Filter from 'components/Filter/Filter';
// import Loader from 'components/Loader/Loader';
import { PhonebookTitle, ContactTitle } from './ContactsView.styled';

const ContactsView = () => {
  // const { data: contacts, isFetching } = useFetchContactsQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // toast('contact is deleted')

  // const [filter, setFilter] = useState('');
  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };

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
