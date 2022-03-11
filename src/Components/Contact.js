import React from "react";
import App from "../App";

const Contact = ({ contactList }) => {
  return contactList.map((contact) => {
    return (
      <div>
        <p>{contact.contactName}</p>
        <p>{contact.city}</p>
        <p>{contact.state}</p>
      </div>
    );
  });
};

export default Contact;
