import PropTypes from 'prop-types';
import { Item, Button } from './ContactElement.styled';

const ContactElement = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactElement;
