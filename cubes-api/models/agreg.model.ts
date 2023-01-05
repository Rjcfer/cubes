import {
    Table,
    Column,
    Model,
    AutoIncrement,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import { Module } from "./module.model";
import { Person } from "./person.model";
    
  @Table
  export class Agreg extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    idAgreg: number;
  
    @Column
    statut: string;
  
    @ForeignKey(() => Module)
    @Column
    idModule: number;

    @ForeignKey(() => Person)
    @Column
    idPerson: number;
  
    
  }
  