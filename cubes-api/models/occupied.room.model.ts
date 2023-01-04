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
import { Room } from "./room.model";
import { Planning } from "./planning.model";

@Table
export class OccupiedRoom extends Model {
  @ForeignKey(() => Room)
  @Column
  idRoom: number;
  @ForeignKey(() => Planning)
  @Column
  idPlanning: number;
}
