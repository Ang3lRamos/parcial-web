import React, { useState, useEffect } from 'react';
function AddContact({ onAdd }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(name, phone, address);
    setName('');
    setPhone('');
    setAddress('');
  }

  return (
    <form className="w-full max-w-sm mx-auto mt-4" onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <label htmlFor="name">Name:</label>
        <input className="appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div  className="flex items-center border-b-2 border-teal-500 py-2">
        <label htmlFor="phone">Phone:</label>
        <input className= "appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div  className="flex items-center border-b-2 border-teal-500 py-2">
        <label htmlFor="address" >Address:</label>
        <input className="appearance-none border border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none rounded-full" id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-12 my-2 mt-4" type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
