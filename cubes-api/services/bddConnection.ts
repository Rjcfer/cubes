import { Sequelize } from "sequelize-typescript";
import config from "../config";
const sequelize = new Sequelize(config.bd);
export default sequelize;
