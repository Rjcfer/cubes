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
    idHorraires: number;
    @Column
    date_debut: date;
    @Column
    date_fin: date;
  }
  