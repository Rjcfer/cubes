import {
    Table,
    Column,
    Model,
    HasMany,
    AutoIncrement,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table
  export class Horaire extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    idTime: number;
    @Column
    startDate: Date;
    @Column
    endDate: Date;
}