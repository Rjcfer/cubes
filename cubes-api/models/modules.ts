import {
    Table,
    Column,
    Model,
    HasMany,
    AutoIncrement,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table
  export class modules extends Model {
    @PrimaryKey
    @Column
    idModules: number;
    @Column
    label: string;
    @Column
    level: string;
    @Column
    dayNumber: number;
  }
  