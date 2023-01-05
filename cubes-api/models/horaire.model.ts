import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Promo } from "./promo.model";
  
@Table
export class Horaire extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idHourly: number;

  @Column
  startDate: Date;

  @Column
  endDate: Date;

  @ForeignKey(() => Promo)
  idPromo: number;

  @BelongsTo(() => Promo)
  promo: Promo;
}
