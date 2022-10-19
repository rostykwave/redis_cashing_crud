import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisToSqlService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async saveToSQL() {
    const keys = await this.cacheManager.store.keys('*');

    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }
    return allData;
  }

  async getFromSQL() {
    const keys = await this.cacheManager.store.keys('*');

    const allData: { [key: string]: any } = {};
    for (const key of keys) {
      allData[key] = await this.cacheManager.get(key);
    }
    return allData;
  }
}
