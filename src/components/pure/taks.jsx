import React from "react";
import PropTypes from "prop-types";
import { Taks } from "../../models/taksClass";

function TaksComponent({ tasks }) {
  return (
    <div className="container">
      <h2>Nombre: {tasks.name}</h2>
      <h3>Description: {tasks.description}</h3>
      <h4>Level:{tasks.level}</h4>
      <h4> This taks is: {tasks.completed ? "It is completed" : "Pending"}</h4>
    </div>
  );
}

TaksComponent.propTypes = {
  tasks: PropTypes.instanceOf(Taks),
};

export default TaksComponent;
