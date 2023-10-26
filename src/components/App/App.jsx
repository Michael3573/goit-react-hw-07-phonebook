import { fetchContacts } from 'Redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.text}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.text}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
