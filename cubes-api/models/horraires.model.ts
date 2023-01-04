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
    date_debut: string;
    @Column
    date_fin: string;
  }
  