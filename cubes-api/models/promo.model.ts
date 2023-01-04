import {
    Table,
    Column,
    Model,
    HasMany,
    AutoIncrement,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table
  export class Promo extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    idPromo: number;
    @Column
    name: string;
  }
  