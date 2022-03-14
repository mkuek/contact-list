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
      setFormContacts({
        contactName: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
      });
      alert("Contact Updated");
    } else {
      setContactList((contactList) => [...contactList, formContents]);
      setFormContacts({
        contactName: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
      });
    }
    console.log(contactItems);
  };

  const handleCancel = (event) => {
    setIsEdit(false);
    setIsExpand((prevState) => !prevState);
  };

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
    <div className="container ">
      <div className="row">
        <div className="col-6 offset-m-1">
          <div className="row align-items-center border border-dark my-3">
            <div className="col-6">
              <h1>Contacts-List</h1>
            </div>
            <div className="col">
              <a
                className="btn btn-success btn-sm"
                href="https://github.com/mkuek/contact-list"
              >
                Source Code
              </a>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Requirements
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="exampleModalLabel">
                        Project Requirements
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-10 offset-1">
                          <h4>
                            <strong>Contact List</strong>
                          </h4>
                          <ul>
                            <li>
                              Create some initial data that will always populate
                              your list on reload.
                            </li>
                            <li>
                              The contact list should always be sorted in
                              alphabetical order by name.
                            </li>
                            <li>
                              The initial view of the list should only show the
                              contact's name, city, and state.
                            </li>
                            <li>
                              When clicked the contact's entire information
                              should be displayed.
                            </li>
                          </ul>
                        </div>
                        <div className="col-10 offset-1">
                          <h4>Editing and Deleting</h4>
                          <ul>
                            <li>Create a way to delete contacts.</li>
                            <li>
                              Create a way to edit contacts. Try to reuse your
                              add form in some way so you don't have to create
                              two different forms.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border border-dark">
            <form className="my-2">
              <div className="row">
                <div className="col-4">
                  <label forhtml="contactName" className="form-label">
                    Name:
                    <input
                      className="form-control col-lg"
                      type="text"
                      name="contactName"
                      id="contactName"
                      onChange={handleChange}
                      value={formContents.contactName}
                    />
                  </label>
                </div>
                <div className="col-3">
                  <label forhtml="phone" className="form-label">
                    Phone number:
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      value={formContents.phone}
                    />
                  </label>
                </div>
                <div className="col-5">
                  <label forhtml="email" className="form-label">
                    Email:
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={formContents.email}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="row m-0 p-0">
                  <label forhtml="address" className="form-label">
                    Street Address:
                    <input
                      className="form-control"
                      type="tel"
                      name="address"
                      id="address"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      onChange={handleChange}
                      value={formContents.address}
                    />
                  </label>
                </div>
                <div className="col-4">
                  <label forhtml="city" className="form-label">
                    City:
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      id="city"
                      onChange={handleChange}
                      value={formContents.city}
                    />
                  </label>
                </div>
                <div className="col-4">
                  <label forhtml="state" className="form-label">
                    State:
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      id="state"
                      onChange={handleChange}
                      value={formContents.state}
                    />
                  </label>
                </div>
                <div className="col-4">
                  <label forhtml="zip" className="form-label">
                    Zipcode:
                    <input
                      className="form-control"
                      type="text"
                      name="zip"
                      id="zip"
                      onChange={handleChange}
                      value={formContents.zip}
                    />
                  </label>
                </div>
              </div>
              <div className="col-4">
                <button
                  className={
                    isEdit === true ? "btn btn-warning" : "btn btn-secondary"
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
                    className="btn btn-secondary"
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
        </div>
        <div className="col-6 col-xl-4 my-3">{contactItems}</div>
      </div>
    </div>
  );
}

export default App;
