"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planning = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const person_model_1 = require("./person.model");
let Planning = class Planning extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Planning.prototype, "idPlanning", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Planning.prototype, "comment", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Planning.prototype, "startDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Planning.prototype, "endDate", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => person_model_1.Person),
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Planning.prototype, "personId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => person_model_1.Person),
    __metadata("design:type", person_model_1.Person)
], Planning.prototype, "person", void 0);
Planning = __decorate([
    sequelize_typescript_1.Table
], Planning);
exports.Planning = Planning;
