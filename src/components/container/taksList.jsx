import React from "react";
import { Levels } from "../../models/levelEnum";
import { Taks } from "../../models/taksClass";
import TaksComponent from "../pure/taks";

export const TaksListComponent = () => {
  const defaultTaks = new Taks(
    "Example",
    "Default Description",
    false,
    Levels.Normal
  );

  return (
    <div className="container">
      <h1>Your Tasks:</h1>
      {/* TODO Aplicar un for/map para renderizar una lista de tareas */}
      <TaksComponent tasks={defaultTaks} />
    </div>
  );
};
