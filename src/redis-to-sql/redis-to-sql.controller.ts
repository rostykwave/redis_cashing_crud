import {
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { RedisToSqlService } from './redis-to-sql.service';

@Controller('redis-to-sql')
export class RedisToSqlController {
  constructor(private readonly redisToSqlService: RedisToSqlService) {}

  @Post()
  saveRedisDataToSQL() {
    return this.redisToSqlService.saveToSQL();
  }

  @CacheKey('redisRestored')
  @CacheTTL(20)
  @Get(':id')
  getRedisDataFromSQL(@Param('id', ParseIntPipe) id: number) {
    return this.redisToSqlService.getFromSQL(id);
  }
}
