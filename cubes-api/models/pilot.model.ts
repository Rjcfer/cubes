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

@Table
export class Pilot extends Model {
  @ForeignKey(() => Person)
  @Column
  idPilot: number;
  @ForeignKey(() => Promo)
  @Column
  idPromo: number;
}
