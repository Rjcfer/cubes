import { AutoIncrement, Column, PrimaryKey, Model, Table, HasOne, BelongsToMany } from "sequelize-typescript";
import { Person } from "./person.model";
import { Promo } from "./promo.model";
import { Room } from "./room.model";
import { Occupied } from "./occupied.model";
import { Act } from "./act.model";
import { modules } from "./modules";

@Table
export class Planning extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idPlanning: number;

  @Column
  comment: string;

  @Column
  startDate: Date;

  @Column
  endDate: Date;

  @HasOne(() => Promo)
  @Column
  promoId: number;

  @HasOne(() => modules)
  @Column
  moduleId: number;

  @BelongsToMany(() => Room, () => Occupied)
  rooms: Room[];

  @BelongsToMany(() => Person, () => Act)
  people: Person[];
}
