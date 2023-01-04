import { Dialect } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";

const config = {
  bd: {
    database: "cube",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
  } as SequelizeOptions,
};
export default config;
