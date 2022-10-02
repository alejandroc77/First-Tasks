import React from "react";
import { ConectedPeople } from "../../models/connected";
import { Contact } from "../../models/contacts";
import Contactos from "../pure/contactos";

const ContactsList = () => {
  const defatulContact = new Contact(
    "Jordy",
    "Alejandro",
    "2 agosto",
    ConectedPeople.CONECTED
  );
  return (
    <div className="container">
      <h1>Your contact</h1>
      <Contactos contacts={defatulContact} />
    </div>
  );
};

export default ContactsList;
