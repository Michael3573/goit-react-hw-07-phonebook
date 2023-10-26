import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = (name, phone) => {
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      phone,
    };
    dispatch(addContact(contact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.name.value;
    const phone = evt.currentTarget.phone.value;
    handleAddContact(name, phone);
    evt.currentTarget.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <input
          className={style.form}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="on"
          placeholder="Name"
        />
      </label>

      <label>
        <input
          className={style.form}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="on"
          placeholder="Number"
        />
      </label>

      <button type="submit" className={style.addBtn}>
        Add contact
      </button>
    </form>
  );
};
