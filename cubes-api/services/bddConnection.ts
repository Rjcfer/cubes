import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "../config";
import { Acts } from "../models/acts.model";
import { Agreg } from "../models/agreg.model";
import { Horaire } from "../models/horaire.model";
import { Module } from "../models/module.model";
import { Occupies } from "../models/occupies.model";
import { Person } from "../models/person.model";
import { Pilot } from "../models/pilot.model";
import { Planning } from "../models/planning.model";
import { Promo } from "../models/promo.model";
import { Qualig } from "../models/qualig.model";
import { Room } from "../models/room.model";

const sequelize: Sequelize = new Sequelize({
  ...config.bd,
  dialect: "mysql",
  models: ["./models/**/*.model.js"],
} as SequelizeOptions);

sequelize.addModels([
  Acts,
  Agreg,
  Horaire,
  Module,
  Occupies,
  Person,
  Pilot,
  Planning,
  Promo,
  Qualig,
  Room,
]);

export default sequelize;
