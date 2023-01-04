import {
  Table,
  Column,
  Model,
  HasMany,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";

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
  telephoneNumber: number;
  @Column
  code: string;
  @Column
  type: "etudiant" | "pilote";
  @Column
  password: string;
}
