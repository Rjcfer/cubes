import {
  Table,
  Column,
  Model,
  HasMany,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
} from "sequelize-typescript";
import { Person } from "./person.model";
import { Pilot } from "./pilot.model";

@Table
export class Promo extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPromo: number;
  @Column
  name: string;
  @BelongsToMany(() => Person, () => Pilot)
  promos: Promo[];
}
