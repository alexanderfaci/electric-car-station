import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class ChargingStation {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  name!: string;

  @Property()
  latitude!: number;

  @Property()
  longitude!: number;
}
