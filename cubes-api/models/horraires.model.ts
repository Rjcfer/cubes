import {
    Table,
    Column,
    Model,
    HasMany,
    AutoIncrement,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table
  export class Horraire extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    idTime: number;
    @Column
    startDate: date;
    @Column
    endDate: date;
  }
  