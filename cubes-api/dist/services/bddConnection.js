"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("../config"));
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, config_1.default.bd), { dialect: "mysql", models: [__dirname + "/models/**/*.model.ts"], modelMatch: (filename, member) => {
        return (filename.substring(0, filename.indexOf(".model")) === member.toLowerCase());
    } }));
exports.default = sequelize;
