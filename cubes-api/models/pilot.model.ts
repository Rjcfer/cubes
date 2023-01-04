import {
  Table,
  Column,
  Model,
  HasMany,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript";
import { Person } from "./person.model";
import { Promo } from "./promo.model";

@Table
export class Pilot extends Model {
  @ForeignKey(() => Person)
  @Column
  idPerson: number;
  @ForeignKey(() => Promo)
  @Column
  idPromo: number;
}
