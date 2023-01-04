import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { Horaire } from "./horaire.model";
import { Person } from "./person.model";
import { Pilots } from "./pilots.model";
import { Planning } from "./planning.model";

@Table
export class Promo extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPromo: number;

  @Column
  name: string;

  @HasMany(() => Horaire)
  horaires: Horaire[];

  @HasMany(() => Planning)
  plannings: Planning[];
  
  @BelongsToMany(() => Person, () => Pilots)
  people: Person[];
}
