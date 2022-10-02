import { Levels } from "./levelEnum";

export class Taks {
  name = "";
  description = "";
  completed = false;
  level = Levels.Normal;

  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
