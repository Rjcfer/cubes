"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: "cubes",
    host: "localhost",
    dialect: "mysql",
    username: "root",
    password: "root",
    models: [__dirname],
});
exports.default = sequelize;
