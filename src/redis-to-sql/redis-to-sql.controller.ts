import { CacheKey, CacheTTL, Controller, Get, Post } from '@nestjs/common';
import { RedisToSqlService } from './redis-to-sql.service';

@Controller('redis-to-sql')
export class RedisToSqlController {
  constructor(private readonly redisToSqlService: RedisToSqlService) {}

  @Post()
  saveRedisDataToSQL() {
    return this.redisToSqlService.saveToSQL();
  }

  @CacheKey('cacheManagerKey')
  @CacheTTL(20)
  @Get()
  getRedisDataFromSQL() {
    return this.redisToSqlService.getFromSQL();
  }
}
