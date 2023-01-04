import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
  BelongsTo,
} from "sequelize-typescript";
import { Acts } from "./acts.model";
import { Agreg } from "./agreg.model";
import { Module } from "./module.model";
import { Pilot } from "./pilot.model";
import { Planning } from "./planning.model";
import { Promo } from "./promo.model";

@Table
export class Person extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPerson: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  phone: number;

  @Column
  code: string;

  @Column
  type: "etudiant" | "pilote";

  @Column
  password: string;

  @BelongsToMany(() => Promo, () => Pilot)
  promos: Promo[];

  @BelongsToMany(() => Planning, () => Acts)
  plannings: Planning[];

  @BelongsToMany(() => Module, () => Agreg)
  modules: Module[];

  /* @BelongsTo(() => Promo)
  studentPromo: Promo;*/
}
