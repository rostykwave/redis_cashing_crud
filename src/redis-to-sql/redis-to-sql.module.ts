import { Module } from '@nestjs/common';
import { RedisToSqlService } from './redis-to-sql.service';
import { RedisToSqlController } from './redis-to-sql.controller';

@Module({
  providers: [RedisToSqlService],
  controllers: [RedisToSqlController]
})
export class RedisToSqlModule {}
