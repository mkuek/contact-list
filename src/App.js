import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
const initial = {
  contactName: "John",
  email: "john@gmail.com",
  address: "123 Main St",
  phone: "(555)555-5555",
  city: "Atlanta",
  state: "GA",
  zip: "30312",
};

function App() {
  const [formContents, setFormContacts] = useState(initial);
  const [contactList, setContactList] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormContacts({ ...formContents, [name]: value });
  };

  // const createContact = (contactInfo) => {
  //   const updatedContacts = [...contacts];
  //   updatedContacts.push(contactInfo);
  //   setContactList({ contacts: updatedContacts });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    setContactList((contactList) => [...contactList, formContents]);

    console.log(contactList);
  };

  const list = contactList.map((contact) => contact);

  // useEffect(() => {
  //   console.log(contacts);
  //   console.log(contactList);
  // }, []);
  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Contacts-List</h1>
          <form>
            <label>
              name:
              <input
                type="text"
                name="contactName"
                onChange={handleChange}
                value={formContents.contactName}
              />
            </label>
            <label>
              email:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formContents.email}
              />
            </label>
            <label>
              Phone number:
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={formContents.phone}
              />
            </label>
            <label>
              Adress:
              <input
                type="tel"
                name="address"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                value={formContents.address}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={formContents.city}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                name="state"
                onChange={handleChange}
                value={formContents.state}
              />
            </label>
            <label>
              Zipcode:
              <input
                type="text"
                name="zip"
                onChange={handleChange}
                value={formContents.zip}
              />
            </label>
            <div className="col-4">
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
          </form>
        </div>
        <div className="col-4">
          <Contact key={contactList.length} contactList={contactList} />
        </div>
      </div>
    </div>
  );
}

export default App;
