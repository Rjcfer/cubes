import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
} from "sequelize-typescript";
import { Occupied } from "./occupied.model";
import { Planning } from "./planning.model";

@Table
export class Room extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idRoom: number;

  @Column
  label: string;

  @Column
  capacity: number;

  @BelongsToMany(() => Planning, () => Occupied)
  plannings: Planning[];
}
