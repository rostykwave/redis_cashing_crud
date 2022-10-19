import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisToSqlService } from './redis-to-sql.service';
import { RedisToSqlController } from './redis-to-sql.controller';
import { RedisToSQLEntity } from './redis-to-sql.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RedisToSQLEntity])],
  providers: [RedisToSqlService],
  controllers: [RedisToSqlController],
})
export class RedisToSqlModule {}
