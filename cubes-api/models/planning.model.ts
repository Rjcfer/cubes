import { AutoIncrement, Column, PrimaryKey, Model, Table, ForeignKey, BelongsTo, AllowNull } from "sequelize-typescript";
import { Person } from "./person.model";

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

  @ForeignKey(() => Person)
  @AllowNull
  @Column
  personId?: number;

  @BelongsTo(() => Person)
  person: Person;
}
