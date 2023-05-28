import { useEffect } from 'react';
import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { getData, getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getData);

  const filter = useSelector(getFilter);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filterCorrectData = () => {
    const newNormFilter = filter?.toLowerCase();

    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(newNormFilter)
    );
  };

  const filterContacts = filterCorrectData();

  return (
    <List>
      {filterContacts?.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};
