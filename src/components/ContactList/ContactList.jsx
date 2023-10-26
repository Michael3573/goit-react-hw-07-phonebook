import { ContactItem } from 'components/ContactItem/ContactItem';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/operations';
import { selectContacts, selectVisibleContacts } from 'Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className={style.ContactList}>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li className={style.phoneBook} key={id}>
              <ContactItem
                onDelete={() => {
                  handleDeleteContact(id);
                }}
                name={name}
                number={phone}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
