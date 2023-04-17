import React, { useState } from 'react';
function Contact(props) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);
  const [address, setAddress] = useState(props.address);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    props.onSave(props.id, name, phone, address);
    setEditing(false);
  }

  function handleCancel() {
    setName(props.name);
    setPhone(props.phone);
    setAddress(props.address);
    setEditing(false);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  if (editing) {
    return (
      <div>
        <input className= "appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" text = "hola"value={name} onChange={e => setName(e.target.value)} />
        <input className= "appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        <input className= "appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" type="text" value={address} onChange={e => setAddress(e.target.value)} />
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleSave}>Save</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"onClick={handleCancel}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div className="contact rounded-lg shadow-md bg-purple-100 p-4 flex flex-col items-center">
        <div className="text-lg font-semibold text-center">{name}</div>
        <div className="text-sm text-gray-500">{phone}</div>
        <div className="text-sm text-gray-500 mb-4">{address}</div>
        <button className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500" onClick={handleEdit} >Edit</button>
        <button className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500" onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Contact;
