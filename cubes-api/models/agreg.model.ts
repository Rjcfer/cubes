import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { Module } from "./module.model";
import { Person } from "./person.model";

@Table
export class Agreg extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idAgreg: number;

  @Column
  status: string;

  @ForeignKey(() => Module)
  @Column
  idModule: number;

  @ForeignKey(() => Person)
  @Column
  idPerson: number;
}
