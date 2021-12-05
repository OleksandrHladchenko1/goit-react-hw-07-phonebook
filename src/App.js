import React, { useState} from 'react';
import Form from './Components/Form/Form';
import ContactsList from './Components/ContactList/ContactsList';
import Filter from './Components/FIlter/Filter';
import { useGetContactsQuery, useGetFilteredContactsQuery, useDeleteContactMutation} from './Components/api/api';
import s from './App.module.css';

export default function App() {
  const [contactName, setContactName] = useState('');
  const { data, error, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const { data: filteredData } = useGetFilteredContactsQuery(contactName, {
    skip: contactName === '',
  });

  const onFilterChange = (e) => {
    setContactName(e.currentTarget.value);
  };

  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter onChange={onFilterChange} value={contactName} />
      {error ? (
        <>Oh no, there was an error</>
      ) : isFetching ? (
        <>Loading...</>
      ) : data && (contactName === '')? (
          <ContactsList contacts={data} onDelete={deleteContact}/>
      ) : filteredData && (contactName !== '')? (
          <ContactsList contacts={filteredData} onDelete={deleteContact}/> 
      ) : null}
    </div>);
};
   