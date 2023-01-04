"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_base_1 = __importDefault(require("../config.base"));
const person_model_1 = require("../models/person.model");
const planning_model_1 = require("../models/planning.model");
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, config_base_1.default.bd), { dialect: "mysql", models: ["./models/**/*.model.js"] }));
sequelize.addModels([person_model_1.Person, planning_model_1.Planning]);
exports.default = sequelize;
