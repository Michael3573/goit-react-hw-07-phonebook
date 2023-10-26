import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div className={style.div}>
      <p className={style.ContactItemName}>{name}:</p>
      <p>{number}</p>

      <button className={style.delBtn} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
