import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { Person } from "./person.model";
import { Promo } from "./promo.model";

@Table
export class Pilots extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPilot: number;

  @ForeignKey(() => Promo)
  @Column
  idPromo: number;

  @ForeignKey(() => Person)
  @Column
  idPerson: number;
}
