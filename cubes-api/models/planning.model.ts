import { AutoIncrement, Column, PrimaryKey, Model, Table, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Person } from "./person.model";
import { Promo } from "./promo.model";
import { Room } from "./room.model";
import { Occupies } from "./occupies.model";
import { Acts } from "./acts.model";
import { Module } from "./module.model";

@Table
export class Planning extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPlanning: number;

  @Column
  comment: string;

  @Column
  startDate: Date;

  @Column
  endDate: Date;

  @BelongsToMany(() => Room, () => Occupies)
  rooms: Room[];

  @ForeignKey(() => Module)
  @Column
  idModule: number;

  @BelongsTo(() => Module)
  module: Module;

  @BelongsToMany(() => Person, () => Acts)
  people: Person[];

  @ForeignKey(() => Promo)
  @Column
  idPromo: number;

  @BelongsTo(() => Promo)
  promo: Promo;
}
