import React, { useState } from "react";
import App from "../App";

const Contact = ({
  contact,
  formContent,
  setFormContacts,
  contactList,
  setContactList,
  isEdit,
  setIsEdit,
  editIndex,
  setEditIndex,
  id,
  isExpand,
  setIsExpand,
}) => {
  const moreInfo = () => {
    setIsExpand((prevState) => !prevState);
    setEditIndex(id);
  };

  const handleEdit = () => {
    const { contactName, city, state, phone, email, address, zip } = contact;
    setFormContacts({ contactName, city, state, phone, email, address, zip });
    setIsEdit(true);
  };

  const handleDelete = () => {
    const deleted = contactList.filter((contact, index) => index !== editIndex);
    setContactList(deleted);
    console.log(deleted);
  };

  return (
    <div className="card border-dark text-center mb-2">
      <div className="card-body p-1">
        <h3 className="card-title">{contact.contactName.toUpperCase()}</h3>
        <h4 className="card-text">{contact.city}</h4>
        <h4 className="card-text mb-0">{contact.state}</h4>
        <div className="collapse" id={`collapse-${id}`}>
          <p className="card-text my-0">{contact.phone}</p>
          <p className="card-text my-0">{contact.email}</p>
          <p className="card-text my-0">{contact.address}</p>
          <p className="card-text my-0">{contact.zip}</p>
          <button className="btn btn-warning mx-1" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={handleDelete}
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${editIndex}`}
          >
            Delete
          </button>
        </div>
        <p className="m-1">
          <button
            className="btn btn-primary mt-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={moreInfo}
          >
            {isExpand === false ? "More Info" : "Less Info"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Contact;
