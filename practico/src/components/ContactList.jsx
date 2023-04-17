import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    } else {
      setContacts([
        { id: 1, name: 'An', phone: '123', address: '123' },
        { id: 2, name: 'An', phone: '456', address: '456' },
      ]);
    }
  }, []);

  // Al actualizar la lista de contactos, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, phone, address) {
    const newContact = { id: contacts.length + 1, name, phone, address };
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  function saveContact(id, name, phone, address) {
    const updatedContacts = contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, name, phone, address };
      }
      return contact;
    });
    setContacts(updatedContacts);
  }

  function deleteContact(id) {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }

  return (
    <div className="bg-blue-300 mx-auto my-40 w-80 h-max rounded">
      <h1 className="text-2xl font-bold text-center bg-blue-200 rounded">Contact List</h1>
      <div className="contact-list flex flex-col items-center">
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
            address={contact.address}
            onSave={saveContact}
            onDelete={deleteContact}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center bg-blue-500 rounded">Add Contact</h2>
      <AddContact onAdd={addContact} />
    </div>
  );
}

export default ContactList;
