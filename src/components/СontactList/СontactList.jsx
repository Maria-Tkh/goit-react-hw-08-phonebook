import PropTypes from 'prop-types';
import ContactElement from 'components/СontactElement/СontactElement';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { List } from './СontactList.styled';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <List>
      {contacts.map(contact => (
        <ContactElement
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={() => onDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default ContactList;
