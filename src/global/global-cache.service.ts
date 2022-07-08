import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { BaseSchema } from 'src/mongo/schemas/base.shema';

@Injectable()
export class GlobalCacheService {
  static cache = new Map<
    pathEnum,
    {
      list: BaseSchema[];
      items: Map<string, BaseSchema>;
    }
  >();

  static getCache(key: pathEnum) {
    if (!this.cache.has(key)) {
      this.cache.set(key, {
        list: [],
        items: new Map(),
      });
    }
    return this.cache.get(key);
  }

  static getCacheList(key: pathEnum) {
    return this.getCache(key).list;
  }
  static getCacheItems(key: pathEnum) {
    return this.getCache(key).items;
  }

  static clearCache() {
    console.log('cache clear');
    GlobalCacheService.cache.clear();
  }
}
