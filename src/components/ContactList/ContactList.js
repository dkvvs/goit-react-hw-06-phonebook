import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/phonebook-actions';
import { getVisibleContact } from 'redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  const contactRemove = id => dispatch(actions.deleteContact(id));

  const onRemove = id => contactRemove(id);

  if (contacts.length === 0) return null;

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item}>
          {name} : {number}
          <button className={s.button} onClick={() => onRemove(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
