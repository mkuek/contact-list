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
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [isExpand, setIsExpand] = useState(false);

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
    if (isEdit) {
      let updatedList = contactList;
      updatedList[editIndex] = formContents;
      setContactList(updatedList);
      setIsEdit(false);
      setIsExpand((prevState) => !prevState);
    } else {
      setContactList((contactList) => [...contactList, formContents]);
    }
    console.log(contactItems);
  };

  const handleCancel = (event) => {
    setIsEdit(false);
    setIsExpand((prevState) => !prevState);
  };

  // useEffect(() => {
  //   const sortFunction = (contactList) => {
  //     return [...contactList].sort(function (a, b) {
  //       const aName = a.contactName.toLowerCase();
  //       const bName = b.contactName.toLowerCase();
  //       if (aName < bName) {
  //         return -1;
  //       }
  //       if (aName > bName) {
  //         return 1;
  //       }
  //     });
  //   };
  //   const sorted = sortFunction(contactList);
  //   setContactList(sorted);
  //   console.log(sorted);
  // }, []);
  const contactItems = contactList
    .sort((a, b) =>
      a.contactName.toLowerCase() > b.contactName.toLowerCase() ? 1 : -1
    )
    .map((contact, index) => (
      <Contact
        key={`contact-${index + 1}`}
        id={index}
        contact={contact}
        formContents={formContents}
        setFormContacts={setFormContacts}
        contactList={contactList}
        setContactList={setContactList}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        isExpand={isExpand}
        setIsExpand={setIsExpand}
      />
    ));
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
              <button
                className={
                  isEdit === true ? "btn btn-warning mt-3" : "btn btn-info mt-3"
                }
                type="submit"
                value="Submit"
                data-bs-toggle="collapse"
                data-bs-target={isEdit === true && `#collapse-${editIndex}`}
                onClick={handleSubmit}
              >
                {isEdit === true ? "Update" : "Submit"}
              </button>
              {isEdit === true && (
                <button
                  className="btn btn-secondary mt-2"
                  data-bs-toggle="collapse"
                  data-bs-target={isEdit === true && `#collapse-${editIndex}`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-4">{contactItems}</div>
      </div>
    </div>
  );
}

export default App;
