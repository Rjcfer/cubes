import { Sequelize } from "sequelize-typescript";
import config from "../config";
const sequelize = new Sequelize({
  ...config.bd,
  dialect: "mysql",
  models: [__dirname + "/models/**/*.model.ts"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});
export default sequelize;
