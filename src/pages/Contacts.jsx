import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Wrap } from './Detals.styled';

const Contacts = () => {
  return (
    <Wrap>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrap>
  );
};

export default Contacts;
