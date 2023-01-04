import { Sequelize } from "sequelize-typescript";
const sequelize = new Sequelize({
  database: "cubes",
  host: "localhost",
  port: 3307,
  dialect: "mysql",
  username: "root",
  password: "root",
  models: ["./models"],
});
export default sequelize;
