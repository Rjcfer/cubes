import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
  HasMany,
  AutoIncrement,
} from "sequelize-typescript";
import { Agreg } from "./agreg.model";
import { Person } from "./person.model";
import { Planning } from "./planning.model";
import { Promo } from "./promo.model";
import { Qualig } from "./qualig.model";
  
@Table
export class Module extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idModule: number;

  @Column
  label: string;

  @Column
  level: string;

  @Column
  dayList: number;

  @HasMany(() => Planning)
  plannings: Planning[];

  @BelongsToMany(() => Person, () => Agreg)
  people: Person[];

  @BelongsToMany(() => Promo, () => Qualig)
  promos: Promo[];
}
