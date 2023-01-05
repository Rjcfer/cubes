import { Dialect } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";

const config = {
  bd: {
    database: "yourBDD",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    logging: console.log,
  } as SequelizeOptions,
};
export default config;
