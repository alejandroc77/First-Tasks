import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contacts";

const Contactos = ({ contacts }) => {
  return (
    <div>
      <h1>Contactos</h1>
      <ol>
        <li>Name: {contacts.name}</li>
        <li>Lastname : {contacts.lastname}</li>
        <li>Address : {contacts.address}</li>
        <li>
          Connected :{" "}
          {contacts.connected ? "logged in user" : "user disconnected"}
        </li>
      </ol>
    </div>
  );
};

Contactos.propTypes = {
  contacts: PropTypes.instanceOf(Contact),
};

export default Contactos;
