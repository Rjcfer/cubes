import { AutoIncrement, Column, ForeignKey, PrimaryKey, Table, Model } from "sequelize-typescript";
import { Person } from "./person.model";
import { Planning } from "./planning.model";

@Table
export class Acts extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idActs: number;

  @Column
  status: string;

  @Column
  conventionState: string;

  @ForeignKey(() => Planning)
  @Column
  idPlanning: number;
  
  @ForeignKey(() => Person)
  @Column
  idPerson: number;
}
