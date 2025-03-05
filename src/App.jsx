import { useState, useEffect } from 'react'

import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import css from './App.module.css'


export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevConacts) => prevConacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}