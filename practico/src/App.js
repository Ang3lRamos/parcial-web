import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
function App() {
  const [contacts, setContacts] = useState([]);


  // function handleAddContact(name, phone, address) {
  //   const newContact = { id: Date.now(), name, phone, address };
  //   setContacts([...contacts, newContact]);
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }

  function handleEditContact(id, newName, newPhone, newAddress) {
    setContacts(
      contacts.map(contact => (contact.id === id ? { ...contact, name: newName, phone: newPhone, address: newAddress } : contact))
    );
  }

  function handleDeleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <ContactList contacts={contacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;

