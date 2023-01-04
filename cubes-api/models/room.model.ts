import {
  Table,
  Column,
  Model,
  HasMany,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";

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
}
