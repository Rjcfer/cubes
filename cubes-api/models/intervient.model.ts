import {
    Table,
    Column,
    Model,
    AutoIncrement,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import { Planning } from "./planning.model";
import { Person } from "./person.model";
    
  @Table
  export class Intervient extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    idIntervient: number;
  
    @Column
    statut: string;

    @Column
    etatConvention: string;
  
    @ForeignKey(() => Planning)
    @Column
    idPlanning: number;

    @ForeignKey(() => Person)
    @Column
    idPerson: number;
  
    
  }
  