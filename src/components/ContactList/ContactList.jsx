import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from '../redux/selectors';
import { deleteContact, fetchContacts } from '../redux/operators';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);
  const hundleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {visibleContacts.map(item => {
            const { name, number } = item.contact;
            return (
              <li className={css.contactItem} key={item.id}>
                <p className={css.contactText}>
                  {name}: {number}
                </p>
                <button
                  className={css.contactButton}
                  type="button"
                  onClick={() => {
                    hundleDeleteContact(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
