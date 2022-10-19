import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RedisToSQLEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  storedRedis: string;
}
