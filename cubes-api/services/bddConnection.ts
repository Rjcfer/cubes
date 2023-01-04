import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config";
import { Person } from "../models/person.model";
import { Pilot } from "../models/pilot.model";
import { Planning } from "../models/planning.model";
import { Promo } from "../models/promo.model";
import { Room } from "../models/room.model";
const sequelize: Sequelize = new Sequelize({
  ...config.bd,
  dialect: "mysql",
  models: ["./models/**/*.model.js"],
} as SequelizeOptions);
sequelize.addModels([Person, Planning, Promo, Pilot, Room]);
export default sequelize;
