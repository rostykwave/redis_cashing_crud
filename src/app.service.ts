import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async create(createDto: CreateDto, cacheManagerKey: string) {
    await this.cacheManager.set(cacheManagerKey, JSON.stringify(createDto), {
      ttl: 60,
    });

    return { cacheManager_key: cacheManagerKey };
  }

  async getByKey(cacheManagerKey: string) {
    const cachedItem = await this.cacheManager.get(cacheManagerKey);

    if (!cachedItem) {
      return `No stored data with cacheManagerKey "${cacheManagerKey}"`;
    }

    return cachedItem;
  }

  async updateOne(cacheManagerKey: string, updateDto: UpdateDto) {
    const isStoredWithCurrentCacheManagerKey = await this.cacheManager.get(
      cacheManagerKey,
    );

    console.log(
      'isStoredWithCurrentCacheManagerKey',
      isStoredWithCurrentCacheManagerKey,
    );
    if (!isStoredWithCurrentCacheManagerKey) {
      return `There isn't available any Cache Manager Key with the name "${cacheManagerKey}"`;
    }

    await this.cacheManager.set(cacheManagerKey, JSON.stringify(updateDto), {
      ttl: 60,
    });

    return {
      cacheManager_key: cacheManagerKey,
      isUpdated: true,
    };
  }

  async remove(cacheManagerKey: string) {
    const isRemoved = await this.cacheManager.del(cacheManagerKey);

    return {
      cacheManager_key: 'cached_item',
      isRemoved: !!isRemoved,
    };
  }
}
