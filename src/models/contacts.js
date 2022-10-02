import { ConectedPeople } from "./connected";

export class Contact {
  name = "";
  lastname = "";
  address = "";
  connected = ConectedPeople.CONECTED;

  constructor(name, lastname, address, connected) {
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.connected = connected;
  }
}
