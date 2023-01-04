import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config";
import { Person } from "../models/person.model";
const sequelize: Sequelize = new Sequelize({
  ...config.bd,
  dialect: "mysql",
  models: ["./models/**/*.model.js"],
} as SequelizeOptions);
sequelize.addModels([Person]);
export default sequelize;
