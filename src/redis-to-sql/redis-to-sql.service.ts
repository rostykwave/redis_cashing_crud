import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedisToSQLEntity } from './redis-to-sql.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class RedisToSqlService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    @InjectRepository(RedisToSQLEntity)
    private readonly accountRepository: Repository<RedisToSQLEntity>,
  ) {}

  @Cron('* * 01 * * *')
  async saveToSQL() {
    const keys = await this.cacheManager.store.keys('*');

    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }

    this.accountRepository.save({ storedRedis: JSON.stringify(allData) });
    return allData;
  }

  async getFromSQL(id: number) {
    const a = await this.accountRepository.findOneBy({ id });

    const storedRedis = JSON.parse(a.storedRedis);
    const keys = Object.keys(storedRedis);

    // this.cacheManager.reset();
    for (const key of keys) {
      await this.cacheManager.set(key, JSON.stringify(storedRedis[key]), {
        ttl: 60,
      });
    }
    return { redisRestored: storedRedis };
  }
}
