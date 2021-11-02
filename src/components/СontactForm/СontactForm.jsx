import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
// import { useCreateContactMutation, useFetchContactsQuery } from 'redux/contactsSlice';
import toast from 'react-hot-toast';
// import Loader from 'components/Loader/Loader';
import { Form, Input, Button } from './СontactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) => dispatch(contactsOperations.createContact({ name, number }));
  // const [createContact, { isLoading }] = useCreateContactMutation();
  // const { data: contacts } = useFetchContactsQuery();

  const handleContact = e => {
    const { name, value } = e.currentTarget;
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

  const handleSubmitContact = e => {
    e.preventDefault();
    const contactToCheck = contacts.some(contact => contact.name === name);
    if (contactToCheck) {
      toast(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    onSubmit(name, number);
    toast(`${name} is added to contacts`);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitContact}>
      <label htmlFor="name">
        Name
        <Input
          value={name}
          onChange={handleContact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.
             Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <Input
          value={number}
          onChange={handleContact}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы,
             тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <div>
        {/* {isLoading && <Loader />} */}
        <Button type="submit">Add contact</Button>
      </div>
    </Form>
  );
};

export default ContactForm;
