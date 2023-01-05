import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { Room } from "./room.model";
import { Planning } from "./planning.model";

@Table
export class Occupies extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idOccupies: number;

  @ForeignKey(() => Room)
  @Column
  idRoom: number;

  @ForeignKey(() => Planning)
  @Column
  idPlanning: number;
}
