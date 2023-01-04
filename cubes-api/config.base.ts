import { Dialect } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";

const config = {
  bd: {
    database: "cubes",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
  } as SequelizeOptions,
};
export default config;
