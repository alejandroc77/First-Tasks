import React from "react";
import ReactDOM from "react-dom/client";
import ContactsList from "./components/container/contactsList";
import { TaksListComponent } from "./components/container/taksList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <TaksListComponent />
    <ContactsList />
  </>
);
