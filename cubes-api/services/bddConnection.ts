import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config.base";
import { Person } from "../models/person.model";
import { Planning } from "../models/planning.model";
const sequelize: Sequelize = new Sequelize({
  ...config.bd,
  dialect: "mysql",
  models: ["./models/**/*.model.js"],
} as SequelizeOptions);
sequelize.addModels([Person, Planning]);
export default sequelize;
