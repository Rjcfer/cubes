import { Model, Table, PrimaryKey, Column, ForeignKey, AutoIncrement } from "sequelize-typescript";
import { Module } from "./module.model";
import { Promo } from "./promo.model";

@Table
export class Qualig extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idQualig: number;

  @ForeignKey(() => Module)
  idModule: number;

  @ForeignKey(() => Promo)
  idPromo: number;
}
